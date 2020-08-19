import { ICategory, ITeamMenu } from 'Interfaces';
export interface ILayoutComponentProps {
    menu: {
        categories: ICategory[],
        teams: ITeamMenu[]
    },
    children: React.ReactElement<any>
}

export interface ILayoutComponentState {
}
