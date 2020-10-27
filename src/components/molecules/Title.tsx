import React from 'react';
type TitleProps = {
    heading: string
}
const Title = ({heading}:TitleProps) => (
    <h1>{heading}</h1>
)

export default Title;
