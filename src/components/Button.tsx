import React from "react";

interface Props {
    text: string;
    onClick: () => void;
}

export default ({ text, onClick }: Props) => {
    return (
        <div>
         <button onClick={onClick}>{text}</button>
        </div>
    );
};