import { HeaderComponent } from "Components";
import * as React from 'react';
import { ILayoutComponentProps, ILayoutComponentState } from "Interfaces";

export class LayoutComponent extends React.Component<ILayoutComponentProps, ILayoutComponentState> {
    public render(): React.ReactElement<any> {
        return (
            <React.Fragment>
                <HeaderComponent menu={this.props.menu} />
                <main>
                    {this.props.children}
                </main>
            </React.Fragment>
        );
    }
}