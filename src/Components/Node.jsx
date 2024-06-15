import React, { useState } from "react";

function Node(props) {
    
    const style = {
        position: "absolute",
        top: props.position[1],
        left: props.position[0]
    }

    return <div className="node" style={style}>
        <p>{props.value}</p>
    </div>
}

export default Node;