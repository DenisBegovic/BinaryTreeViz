import React, {useState} from "react";
import Node from "./Node";


function convert(values) {
    let level = 1;
    let output = [];
    let subArr = [];
    let start = 0;
    let end = 1;
    while (start < values.length) {
        for (let i = start; i < end; i++) {
            if (values[i]) {
                subArr.push(values[i]); 
            } else {
                subArr.push("null");
            }
        }
        output.push(subArr);
        subArr = [];

        start = end;
        level *= 2;
        end += level;
    }
    return output;
}


function Canvas({values}) {
    const tree = convert(values);
    console.log(values);

    function displayTree() {
        let output = [];
        const center = 1000;
        let horizonalOffset = 400;
        const verticalOffset = 80;
        let lastStart = center;
        for (let level = 0; level < tree.length; level++) {
            let y = level * verticalOffset;
            let start = lastStart - horizonalOffset;
            let step = horizonalOffset * 2;
            for (let i = 0; i < tree[level].length; i++) {
                output.push(<Node value={tree[level][i]} position={[start + step * i, y]} />)
            }
            lastStart = start;
            horizonalOffset = horizonalOffset / 2;
        }
        return output;
    }

    return <div className="canvas">
                <div className="tree">
                    {displayTree()}
                </div>
            </div>
}

export default Canvas;