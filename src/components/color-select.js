import React from "react"

const ColorSelect = ({ changeColor, getColorName }) => {
    const colors = [{
            name: `salmon`,
            hex: `fa8072`
        }, {
            name: `steelblue`,
            hex: `4682b4`
        }, {
            name: `indigo`,
            hex: `4b0082`
        }, {
            name: `teal`,
            hex: `008080`
        }, {
            name: `original`,
            hex: `c9cc82`
        }
    ]

    const applyColor = (e, color) => {
        e.preventDefault()
        changeColor(`e_replace_color:${color}:10:c9cc82`)
    }

    const getColor = (e, color) => {
        e.preventDefault()
        return getColorName(color.name)
    }

    return (
        <>
            <p>Other colors:</p>
            <ul className="flex flex-wrap">
                {colors.map(color => {
                    return (
                        // <li key={color.hex} value={color.hex} onClick={e => applyColor(e, color.hex)}>
                        //     <span className="cursor-pointer inline-block px-4 py-2 rounded-full m-1 text-black-800" style={{backgroundColor: `#` + color.hex}}>&nbsp;</span>{color.name}
                        // </li>
                        <li key={color.hex} value={color.hex} className="mt-2">
                            <div onClick={(e => {applyColor(e, color.hex); getColor(e, color)})}>
                                <span className="cursor-pointer px-4 py-2 rounded m-1 inline-block text-white" style={{backgroundColor: `#` + color.hex}}>{color.name}</span>
                            </div>
                        </li>   
                    )
                })}
            </ul>
        </>
    )
}

export default ColorSelect