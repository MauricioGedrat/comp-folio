import { BottomToTop, LeftToRight } from 'assets/animations'
import RightToLeft from 'assets/animations/rightToLeft/index.'
import TopToBottom from 'common/animations/topToBottom'
import Deco1Svg from 'common/svgIcons/Deco1Svg'
import Image from 'next/image'
import React from 'react'
import Img from '../../assets/images/hero-bg.jpg'
import HabilityCard from './HabilityCard'

const Inicio = () => {
    return (
        <div className="h-screen relative -z-50 bg-[#ffffff] dark:bg-gray-800 pt-40">
            {' '}
            <LeftToRight>
                <div className="absolute xl:flex justify-end -z-20 left-[42%] 2xl:bottom-[15%] bottom-[25%] hidden ">
                    <h1 className="text-[#8080801a] 2xl:text-[450px] flex text-[350px] items-center -rotate-6 font-bold">
                        <BottomToTop>D</BottomToTop>
                        <TopToBottom>E</TopToBottom>
                        <BottomToTop>V</BottomToTop>
                    </h1>
                </div>
                <div className="grid gap-10 xl:grid-cols-2">
                    <div className="xl:ml-20">
                        <div className="flex justify-center mb-4 xl:justify-start xl:ml-10">
                            <h1 className="text-3xl font-bold font-poppins">
                                Maurício Gedrat
                            </h1>
                        </div>
                        <div className="relative">
                            <Deco1Svg className="absolute hidden xl:flex -left-5 -top-5" />
                            <Deco1Svg className="absolute hidden -right-5 xl:flex -bottom-5" />
                            <Image
                                src={Img}
                                className="relative xl:rounded-3xl -z-30"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-start mt-4">
                            <h1 className="text-3xl font-bold font-poppins">
                                Minhas habilidades
                            </h1>
                        </div>
                        <div>
                            <RightToLeft>
                                <HabilityCard />
                            </RightToLeft>
                        </div>
                    </div>
                </div>
            </LeftToRight>
        </div>
    )
}

export default Inicio
