import React from 'react'
import { svgProps, defaultProps } from './svgBase'

const Deco1Svg = (props: svgProps): JSX.Element => {
    const {} = props

    return (
        <>
            <svg
                {...defaultProps}
                {...props}
                width={60}
                height={52}
                viewBox="0 0 60 52"
            >
                <rect
                    x="35.6069"
                    y="0.995667"
                    width="4"
                    height="60"
                    transform="rotate(35.5 35.6069 0.995667)"
                    fill="#FFE600"
                />
                <rect
                    x="46.8423"
                    width="4"
                    height="60"
                    transform="rotate(35.5 46.8423 0)"
                    fill="#FFE600"
                />
                <rect
                    x="57.8423"
                    width="4"
                    height="60"
                    transform="rotate(35.5 57.8423 0)"
                    fill="#FFE600"
                />
            </svg>
        </>
    )
}

export default Deco1Svg
