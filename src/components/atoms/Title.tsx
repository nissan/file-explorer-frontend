import React from 'react';
type TitleProps = {
    heading: string
}
const Title = ({heading}:TitleProps) => (
    <h1 className="text-center">{heading}</h1>
)

export default Title;
