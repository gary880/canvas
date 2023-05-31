import React from "react";
import { useState } from "react";


const ElementMaker = (props) => {

    const [showInputEle, setShowInputEle] = useState(false);
    //with double click => change to input
    return (
        <>
            {
                showInputEle ?
                    <input
                        type="text"
                        value={props.value}
                        onChange={props.handleChange}
                        onBlur={() => setShowInputEle(false)}
                        autoFocus
                        style={{ color: "blue" }}
                    />
                    :
                    <span
                        onDoubleClick={() => setShowInputEle(true)}
                        style={{
                            display: "inline-block",
                            height: "25px",
                            minWidth: "300px",
                        }}
                    >
                        {props.value}
                    </span>

            }
        </>
    );
}

export default ElementMaker;