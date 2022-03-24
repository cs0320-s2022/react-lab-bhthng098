import React, {Dispatch, SetStateAction, useState} from 'react';

function TextBox(props: {label: string; change: Dispatch<SetStateAction<string>>;}) {
    return (
        <div>
            <header>
                <label>{props.label}</label><br/>
                <input type={"text"} onChange={event => props.change(event.target.value)}/><br/><br/>
            </header>
        </div>
    );
}

export default TextBox;