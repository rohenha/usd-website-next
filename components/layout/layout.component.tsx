import { HeaderComponent } from "Components";
import * as React from 'react';
import { ILayoutComponentProps } from "Interfaces";

export function LayoutComponent({ menu, children }: ILayoutComponentProps) {
    return (
        <React.Fragment>
            <HeaderComponent menu={menu} />
            <main>
                {children}
            </main>
        </React.Fragment>
    );
}