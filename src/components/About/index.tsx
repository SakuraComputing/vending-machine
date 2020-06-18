import * as React from 'react';
import {IAboutProps} from '../types/vending';

const About: React.FC<IAboutProps> = (props) => {
    return (
        <h1 className="heading">
            {props.name}
      </h1>
    )
}
export default About;