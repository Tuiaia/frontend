import Image from 'next/image'
import { Hallyson, Lourdes, TiagoSanti } from '@/data/text/members'

const members = [Hallyson, Lourdes, TiagoSanti, TiagoSanti]

const NossoTime = () => {
    return (
        <section className={'w-full bg-[url("../public/nosso_time.jpg")] bg-no-repeat bg-cover pb-72'} >
            <div className={'flex flex-col justify-center items-center pt-16'}>
                <span className={'text-4xl font-bold text-secondary mb-3'}>Nosso time</span>
                <span className={'text-p-bold text-center text-xl'}>
                    Estudantes de graduação da <br/>
                    Universidade Federal de Mato Grosso do Sul
                </span>
            </div>
            {members?.map((member, index) => {
                return (
                    <div className={'flex justify-center pt-8 gap-6 flex-wrap mt-14'} key={index}>
                        {index % 2 === 0?
                            (
                                <>
                                <Image src={member.image} alt={`Foto do ${member.name}`} width={300} height={300} />
                                <div className={'flex flex-col gap-4 max-w-2xl p-4'}>
                                    <span className={'text-thirdy font-bold text-xl'}>{member.name}</span>
                                    <span className={'font-semibold text-p-light'}>{member.graduation}</span>
                                    <span className={'break-words text-p-light'}>{member.description}</span>
                                </div>
                                </>
                            ) : (
                                <>
                                    <div className={'flex flex-col gap-4 max-w-2xl p-4 text-end'}>
                                        <span className={'text-thirdy font-bold text-xl'}>{member.name}</span>
                                        <span className={'font-semibold text-p-light'}>{member.graduation}</span>
                                        <span className={'break-words text-p-light'}>{member.description}</span>
                                    </div>
                                    <Image src={member.image} alt={`Foto do ${member.name}`} width={300} height={300} />
                                </>
                            )
                        }

                    </div>
                )
            })}
        </section>
    )
}

export default NossoTime
