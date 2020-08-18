import { ICategory, ITeamMenu } from 'Interfaces';
export interface IHeaderComponentProps {
    menu: {
        categories: ICategory[],
        teams: ITeamMenu[]
    }
}

export interface IHeaderComponentState {
}
