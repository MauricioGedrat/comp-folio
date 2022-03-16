import { LeftToRight } from 'assets/animations'
import { OpacityAndScale } from 'common/animations'
import Deco1Svg from 'common/svgIcons/Deco1Svg'

import Image from 'next/image'
import React from 'react'
import { imagesFolio } from './Images'

const Folio = () => {
    return (
        <div id="folio" className="box-border pt-20 pl-5 pr-5">
            <LeftToRight>
                <section>
                    <div className="flex justify-center mt-20">
                        <h1 className="text-3xl font-bold font-poppins">
                            Veja alguns dos site que eu já fiz
                        </h1>
                    </div>
                    <div className="flex justify-center">
                        <div className="box-border grid grid-cols-1 gap-8 pt-20 xl:grid-cols-3 lg:grid-cols-2">
                            {imagesFolio.map((item, index) => {
                                return (
                                    <div key={index} className="max-w-screen">
                                        <OpacityAndScale>
                                            {' '}
                                            <div className="mb-8 duration-300">
                                                {' '}
                                                <a
                                                    href={item.link}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    {' '}
                                                    <div className="box-border relative">
                                                        <Deco1Svg className="absolute z-50 hidden xl:flex -left-5 -top-5" />
                                                        {/* <OpacityAndScale> */}{' '}
                                                        <Image
                                                            alt="galeria"
                                                            src={item.img}
                                                            width={500}
                                                            height={300}
                                                            className="duration-300 rounded-lg hover:scale-110 hover:opacity-75"
                                                        />
                                                    </div>
                                                    {/* </OpacityAndScale> */}
                                                </a>
                                            </div>
                                        </OpacityAndScale>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </LeftToRight>
        </div>
    )
}

export default Folio
