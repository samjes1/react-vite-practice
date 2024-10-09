import React from 'react';

interface TitleProps {
    text: string;
}

const Title: React.FC<TitleProps> = ({ text ="Texto por default"}) => {
    return (
        <h1>
            {text}
        </h1>
    );
};

export default Title;
