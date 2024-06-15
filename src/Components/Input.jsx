import React, {useState} from "react";

function Input({submit}) {
    const [inputValue, setInputValue] = useState('');
    let values = [];

    function handleChange(event) {
        const text = event.target.value;
        console.log(text);        
        setInputValue(text);
    }

    function handleClick() {
        submit(inputValue + ',');
        setInputValue(" ");
    }

    return <div className="submit-area">
        <input type="text" onChange={handleChange} value={inputValue} />
        <button className="submit-button" onClick={handleClick}>Create Tree</button>
    </div>
}

export default Input;