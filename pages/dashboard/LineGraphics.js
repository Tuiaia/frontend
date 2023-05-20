import Chart from "react-google-charts"
import { useEffect, useState } from "react"
import { findCotationsByName, findEmployeeOptions } from "@/api/dashboard/controller";
import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';

const LineGraphics = ({ news }) => {
    const [filters, setFilters] = useState([false, false, false, false])
    const [inputData, setInputData] = useState({text: '', status: 'initial'})
    const [employeeData, setEmployeeData] = useState(null)
    const [options, setOptions] = useState([])
    const [employeeSelected, setEmployeeSelected] = useState('')
    const [sentimentGraphic, setSentimentGraphic] = useState([]);
    const [employeeGraphic, setEmployeeGraphic] = useState([])
    const [companyGraphic, setCompanyGraphic] = useState([])
    const [possibleDates, setPossibleDates] = useState([])
    const today = new Date()
    const styleButtonByActivation = ['bg-third text-white', 'bg-white text-primary']
    const filtersButton = [
        { text: 'Longo prazo' },
        { text: 'Curto prazo' },
        { text: 'Alto impacto' },
        { text: 'Baixo impacto' }
    ]
    const sentimentOptions = {
        title: 'Notícias Classificadas nos últimos 7 dias',
        legend: { position: 'bottom' },
        vAxis: { viewWindow: { min: 0 } },
        animation: {
            startup: true,
            easing: 'linear',
            duration: 1500,
        },
    };
    const employeeOptions = {
        title: 'Preço das ações nos últimos 7 dias',
        legend: { position: 'bottom' },
        animation: {
            startup: true,
            easing: 'linear',
            duration: 1500,
        },
    };
    

    useEffect(() => {
        const initialValues = getInitialGraphicValues()
        setPossibleDates(initialValues[0])
        setSentimentGraphic(initialValues[1])
        setEmployeeGraphic(initialValues[2])
        setCompanyGraphic(initialValues[2])
    }, [])


    useEffect(() => {
        if (news && possibleDates.length > 0) {
            formatNewsToSentimentGraphic(news)
        }
    }, [news, possibleDates])

    useEffect(() => {
        async function getEmployeeData() {
            setInputData((current) => ({ ...current, status: 'loading' }));
            try {
                const response = await findCotationsByName(employeeSelected, possibleDates[0], possibleDates[possibleDates.length-1])
                setEmployeeData(response['Time Series (Daily)'])
                setInputData((current) => ({ ...current, status: 'sent' }));
            } catch (error) {
                setInputData((current) => ({ ...current, status: 'failure' }));
            }
        }
        if (employeeSelected) {
            getEmployeeData()
        }
    }, [employeeSelected])

    useEffect(() => {
        if (employeeData && possibleDates?.length > 0){
            formatValuesToEmployeeGraphic()
        }
    }, [employeeData, possibleDates])

    function getInitialGraphicValues() {
        const dates = []
        const datesToSentimentGraphics = [['Dias', 'Positivos', 'Negativos']]
        const datesToEmployeeGraphics = [['Dias', 'Preço da Ação']]
        let possibleDate = new Date()
        for (let day = 6; day >= 0; day--) {
            possibleDate.setDate(today.getDate() - day)
            dates.push(possibleDate.toLocaleDateString('pt-BR'))
            datesToSentimentGraphics.push([possibleDate.toLocaleDateString('pt-BR').slice(0,5), 0, 0])
            datesToEmployeeGraphics.push([possibleDate.toLocaleDateString('pt-BR').slice(0,5), 0])
        }
        return [dates, datesToSentimentGraphics, datesToEmployeeGraphics]
    }

    function formatNewsToSentimentGraphic(newsFiltered) {
        newsFiltered.map((item) => {
            const classification = parseInt(item.classification.sentiment)
            if (classification !== 1) {
                const day = possibleDates.findIndex((possibleDate) => possibleDate === item.date) - 1
                if (day !== 0) {
                    const classificationPosition = classification === 0? classification + 2 : classification - 1
                    sentimentGraphic[day+1][classificationPosition]++
                }
            }
        })
    }

    function formatValuesToEmployeeGraphic() {
        const dataGraphic = employeeGraphic
        if(employeeData) {
            Object.keys(employeeData).map((date) => {
                const day = possibleDates.findIndex((possibleDate) => possibleDate.slice(0,2) === date.slice(-2))
                if (day !== -1) {
                    dataGraphic[day+1][1] = Number(employeeData[date]['4. close'])
                }
            })
            dataGraphic[1][1] = dataGraphic[2][1]
            dataGraphic[7][1] = dataGraphic[6][1]
            setCompanyGraphic(dataGraphic)
            handleSubmit(true)
        }
    }

    const handleSubmit = async (flag) => {
        setInputData((current) => ({ ...current, status: 'loading' }));
        try {
            const response = await findEmployeeOptions(inputData.text)
            setOptions(response.bestMatches)
            setInputData((current) => ({ ...current, status: 'sent' }));
            if (flag) {
                setInputData((current) => ({ text: '', status: 'sent' }));
            }
        } catch (error) {
            if (flag)
                setInputData((current) => ({ ...current, status: 'sent' }));
            else
                setInputData((current) => ({ ...current, status: 'failure' }));
        }
    };

    function selectOption(option) {
        setEmployeeSelected(option);
        setOptions([])
    }

    return <section className={'bg-primary p-20 w-full min-h-screen'}>
        <div className={'max-w-5xl text-5xl m-auto text-center w-full text-secondary font-bold'}>
            Compare as notícias do mercado financeiro com a sua carteira de ações
        </div>
        <div className={'flex justify-center items-center mt-32 gap-20'}>
            <div className={'flex justify-center flex-col mt-28'}>
                <Chart
                    width={'500px'}
                    height={'500px'}
                    chartType={'LineChart'}
                    data={sentimentGraphic}
                    options={sentimentOptions}
                />
            </div>
            
            <div className={'flex justify-center flex-col gap-10'}>
                <div className={'flex'}>
                    <form id="demo">
                        <FormControl>
                            <Input
                                sx={{ '--Input-decoratorChildHeight': '45px' }}
                                placeholder={'Empresa ou código da ação'}
                                autoComplete={'off'}
                                value={inputData.text}
                                onChange={(event) => setInputData({ text: event.target.value, status: 'initial' })}
                                error={inputData.status === 'failure'}
                                endDecorator={
                                    <Button
                                        variant="solid"
                                        color="primary"
                                        loading={inputData.status === 'loading'}
                                        onClick={handleSubmit}
                                        sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                                    >
                                        Buscar Cotações
                                    </Button>
                                }
                            />
                            {inputData.status === 'failure' && (
                            <FormHelperText
                                sx={(theme) => ({ color: theme.vars.palette.danger[400] })}
                            >
                                Oops! Algo de errado aconteceu, tente novamente.
                            </FormHelperText>
                            )}

                            {inputData.status === 'sent' && (
                            <FormHelperText
                                sx={(theme) => ({ color: theme.vars.palette.primary[400] })}
                            >
                                Cotação encontrada!
                            </FormHelperText>
                            )}
                        </FormControl>
                    </form>
                </div>
                <div className={'flex gap-10'}>
                    <Chart
                        width={'500px'}
                        height={'500px'}
                        chartType={'LineChart'}
                        data={companyGraphic}
                        options={employeeOptions}
                    />
                    {options?.length > 0 && <div className={'text-white max-w-[20%]'}>
                            <div className={'text-3xl'}>Selecione uma das ações: </div>
                            <div>
                                {options.map((option, index) => {
                                    return <button className={'m-3 bg-white text-primary p-2 rounded-xl'} key={index} onClick={() => selectOption(option['1. symbol'])}>{option['1. symbol']}</button>
                                })}
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    </section>
}

export default LineGraphics