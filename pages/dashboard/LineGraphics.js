import Chart from "react-google-charts"
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import { useState } from "react"

const LineGraphics = ({ news, date, setDate }) => {
    const [selected, setSelected] = useState(0)

    function handleChange(event) {
        setSelected(event.target.value)
    }


    return <section className={'bg-primary p-20 w-full min-h-screen'}>
    <div className={'max-w-5xl text-5xl m-auto text-center w-full text-secondary font-bold'}>
        Compare as notícias do mercado financeiro com a sua carteira de ações
    </div>
    <div className={'flex text-white text-3xl font-bold mt-40 items-center'}>
        <div className={'mr-3'}>Filtre suas notícias por período: </div>
        <FormControl style={{ minWidth: '20%' }}>
            <InputLabel></InputLabel>
            <Select
                sx={{
                    color: "white",
                    '.MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(228, 219, 233, 0.25)',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(228, 219, 233, 0.25)',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(228, 219, 233, 0.25)',
                    },
                    '.MuiSvgIcon-root ': {
                        fill: "white !important",
                        color: 'white'
                    }
                }}
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={selected}
                label=""
                onChange={handleChange}
            >
                <MenuItem value={0}>Hoje</MenuItem>
                <MenuItem value={1}>7 dias atrás</MenuItem>
                <MenuItem value={2}>1 mês atrás</MenuItem>
            </Select>
        </FormControl>

    </div>
    <div className={'flex justify-center'}>
        <div className={'flex justify-center flex-col flex-1'}>
            <div className={'flex justify-center'}>


            </div>
            {/* <Chart /> */}
        </div>
        
        <div className={'flex justify-center flex-col flex-1'}>
            <div className={'flex justify-center'}>

            </div>
        </div>
    </div>

    </section>
}

export default LineGraphics