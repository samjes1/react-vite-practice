import React from 'react';

interface TitleProps {
    text: string;
    onClick?: () => void;
}



const Button: React.FC<TitleProps> = ({text = "Click me", onClick}) => {
    return (
        <button onClick={() => alert("I was clicked")}>{text}</button>
    )
};

export default Button;