import { ICategory, ITeamMenu } from 'Interfaces';
export interface ILayoutComponentProps {
    menu: {
        categories: ICategory[],
        site: any,
        seo: any,
        teams: ITeamMenu[]
    },
    children: React.ReactElement<any>
}

export interface ILayoutComponentState {
}
