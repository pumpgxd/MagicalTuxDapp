import { FunctionComponent } from 'react';
import React from 'react';

const NavButton: FunctionComponent<{ text: string}> = (props) => {

    return (
        <div className="px-2 py-1 rounded-lg hover:bg-[#000000]">
            <button>{props.text}</button>
        </div>
    )

}

export default NavButton;