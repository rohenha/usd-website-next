import * as React from 'react';
import { ITitleComponentProps } from "Interfaces";

import './title.component.sass';

export function TitleComponent({ balise, text }: ITitleComponentProps) {
    const span = React.createElement("span", {}, text);
    const title = React.createElement(balise, { "className": "c_title", "data-title": text }, span);
    return (
        <React.Fragment>
            {title}
        </React.Fragment>
    );
}