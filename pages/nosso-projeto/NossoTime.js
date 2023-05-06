import Image from 'next/image'
import { Hallyson, Lourdes, Rodrigo, TiagoSanti } from '@/data/text/members'
import NossoTimeText from '@/data/text/nossoProjeto/NossoTimeText';

const members = [Hallyson, Rodrigo, Lourdes, TiagoSanti]

const NossoTime = () => {
    return (
        <section className={'w-full bg-[url("../public/nosso_time.jpg")] bg-no-repeat bg-cover pb-72'} >
            <div className={'flex flex-col justify-center items-center pt-16'}>
                <span className={'text-6xl font-bold text-secondary mb-12'}>{NossoTimeText.title}</span>
                <span className={'text-p-bold text-center text-4xl mb-8'}>
                    {NossoTimeText.subtitle_first}<br/>
                    {NossoTimeText.subtitle_second}
                </span>
            </div>
            {members?.map((member, index) => {
                return (
                    <div className={'flex justify-center pt-8 gap-6 flex-wrap mt-14'} key={index}>
                        {index % 2 === 0 && <Image src={member.image} alt={`Foto do ${member.name}`} width={300} height={300} />}
                            <div className={'flex flex-col gap-4 max-w-2xl p-4'}>
                                <span className={'text-third font-bold text-4xl'}>{member.name}</span>
                                <span className={'font-semibold text-3xl text-secondary'}>{member.graduation}</span>
                                <span className={'break-words text-2xl text-primary text-justify'}>{member.description}</span>
                            </div>
                        {index % 2 !== 0 && <Image src={member.image} alt={`Foto do ${member.name}`} width={300} height={300} />}
                    </div>
                )
            })}
        </section>
    )
}

export default NossoTime
