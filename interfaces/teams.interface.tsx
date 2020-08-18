import { ICategory } from "Interfaces";

export interface ITeamMenu {
    name: string,
    slug: string,
    category: ICategory
}

export interface ITeam {
    name: string,
    slug: string,
    category: ICategory,
    team: string,
    managers: {
        name: string,
        surname: string
    }
}