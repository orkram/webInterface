import React from "react";
import "./ResultBar.css"

export default function ResultBar(props) {
    return (
        <div className={"result-box"}>
            <div className={"hits"}> Number of hits: {props.result}  </div>
        </div>
    );
}

