import { ICategory, ITeamMenu } from 'Interfaces';
export interface IHeaderComponentProps {
    menu: {
        categories: ICategory[],
        site: any,
        seo: any,
        teams: ITeamMenu[]
    }
}

export interface IHeaderComponentState {
}
