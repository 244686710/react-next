import React, { useState } from "react"

function Yuyd() {
    const [color, setColor] = useState('blue')

    const changeColor = () => {
        setColor( color == 'blue' ? 'red' : 'blue')
    }
    return (
        <>
            <div className="color-primary">Hello Yuyd</div>
            <div><button onClick={changeColor}>改变颜色</button></div>
            <style jsx>
                {
                    `
                        .color-primary {
                            color: ${color}
                        }
                    `
                }
            </style>
        </>
    )
}

export default Yuyd