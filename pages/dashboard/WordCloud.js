import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart } from 'react-google-charts';
import CapivaraLoading from '../../components/CapivaraLoading';

const WordCloudComponent = () => {
    const [imgSrc, setImgSrc] = useState('');
    const [barData, setBarData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const startDate = encodeURIComponent('14/05/2023');
        const endDate = encodeURIComponent('20/05/2023');
        const url = `http://35.199.123.76/wordcloud?startdate=${startDate}&enddate=${endDate}`;
        const barUrl = `http://35.199.123.76/barwordcloud?startdate=${startDate}&enddate=${endDate}`;

        setFade(true); // Início do efeito fade-out

        const getWordCloud = axios
            .get(url, { responseType: 'arraybuffer' })
            .then((response) => {
                const base64 = btoa(
                    new Uint8Array(response.data).reduce(
                        (data, byte) => data + String.fromCharCode(byte),
                        ''
                    )
                );
                setImgSrc(`data:image/png;base64,${base64}`);
                setFade(false); // Fim do efeito fade-out e início do efeito fade-in
            });

        const getBarData = axios.get(barUrl).then((response) => {
            const formattedData = [['Palavra', 'Quantidade']];
            Object.entries(response.data)
                .slice(0, 10)
                .forEach(([key, value]) => {
                    formattedData.push([key, value]);
                });
            setBarData(formattedData);
        });

        Promise.all([getWordCloud, getBarData])
            .then(() => setIsLoading(false))
            .catch((err) => {
                console.error(err);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    width: '100vw',
                    backgroundColor: '#48B091',
                }}
            >
                <CapivaraLoading />
            </div>
        );
    }

    return (
            <div className={'flex flex-col items-center justify-center bg-third gap-10 p-10 py-20'}
            >
                <div className='mb-16 text-5xl m-auto text-center w-full text-white font-bold'>
                    <div>Assuntos em destaque</div>
                    <div className={'text-3xl text-primary mt-5'}>Últimos 7 dias</div>
                </div>
                <div className={'flex justify-center items-center gap-20'}>
                    <div style={{ textAlign: 'center' }}>
                        {imgSrc && (
                            <img
                                className={`word-cloud-image ${fade ? 'fade-out' : 'fade-in'}`}
                                src={imgSrc}
                                style={{ borderRadius: '15px', width: '600px', height: '600px' }}
                                alt="WordCloud"
                            />
                        )}
                    </div>
                    <div style={{ borderRadius: '15px', overflow: 'hidden' }}>
                        <Chart
                            width={'800px'}
                            height={'600px'}
                            chartType="BarChart"
                            data={barData}
                            options={{
                                title: '10 palavras mais citadas',
                                legend: { position: 'none' },
                                hAxis: {
                                    title: 'Quantidade de citações',
                                    titleTextStyle: { fontSize: 18, italic: false },
                                    textStyle: { fontSize: 16 },
                                },
                                vAxis: {
                                    title: 'Palavras citadas',
                                    titleTextStyle: { fontSize: 18, italic: false },
                                    textStyle: { fontSize: 16 },
                                },
                                colors: ['#003475'],
                                animation: {
                                    startup: true,
                                    easing: 'linear',
                                    duration: 1500,
                                },
                            }}
                        />
                    </div>
                </div>
            </div>
    );
};

export default WordCloudComponent;
