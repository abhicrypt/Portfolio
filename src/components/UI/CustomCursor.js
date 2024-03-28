import React, {useEffect} from "react";

import classes from "./CustomCursor.module.scss"

const CustomCursor = ({posX,posY}) => {
    const cursorStyles = {
        top : posY,
        left : posX
    }

    useEffect(() => {
        const cursorOutline = document.getElementById("cursorOutline")

        cursorOutline.animate({
            left : `${posX}px`,
            top : `${posY}px`
        }, {duration : 500, fill : "forwards"})
    }, [posX,posY])

    return (
        <>
        <div className={classes.cursor} style={cursorStyles}></div>
        <div className={classes.outline} id="cursorOutline" style={cursorStyles}></div>
        </>
    )
}

export default CustomCursor

