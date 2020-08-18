import * as React from 'react';
import { IHeaderComponentProps, IHeaderComponentState } from "Interfaces";

export class HeaderComponent extends React.Component<IHeaderComponentProps, IHeaderComponentState> {
    public render(): React.ReactElement<any> {
        return (
            <div className="header">{JSON.stringify(this.props.teams, null, 2)}</div>
        );
    }
}