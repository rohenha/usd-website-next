export interface ITeamMenu {
    name: string,
    slug: string
}

export interface ITeam {
    name: string,
    slug: string,
    category: {
        name: string
    },
    managers: {
        name: string,
        surname: string
    }
}