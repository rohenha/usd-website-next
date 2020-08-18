import { ICategory, ITeamMenu } from 'Interfaces';
export interface ILayoutComponentProps {
    menu: {
        categories: ICategory[],
        teams: ITeamMenu[]
    }
}

export interface ILayoutComponentState {
}
