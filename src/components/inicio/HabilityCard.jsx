import React from 'react'
import { arrayHabilty } from './arrayHability'

const HabilityCard = () => {
    return (
        <div className="mt-5">
            {arrayHabilty.map((item, index) => {
                return (
                    <div key={index} className="mb-4">
                        <div className="mb-1 text-base font-medium dark:text-white">
                            {item.name}: {item.percentage}
                        </div>
                        <div className="w-[75%] bg-gray-300 rounded-full h-2.5 dark:bg-gray-500">
                            <div
                                className="bg-[#ffe600] h-2.5 rounded-full "
                                style={{ width: `${item.widthBar}%` }}
                            ></div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default HabilityCard
