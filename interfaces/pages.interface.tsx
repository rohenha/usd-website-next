import { ITeamMenu, ITeam } from 'Interfaces';

export interface IHomePage {
    teams: ITeamMenu[]
}

export interface IMediasPage {
    teams: ITeamMenu[]
}

export interface IMonClubPage {
    teams: ITeamMenu[]
}

export interface IEquipesPage {
    teams: ITeamMenu[]
}

export interface IContactPage {
    contact: {
        email: string,
        president: {
            email: string,
            name: string,
            phone: string,
            surname: string
        },
        presidentJeunes: {
            email: string,
            name: string,
            surname: string,
            phone: string
        },
        adresse: {
            latitude: number,
            longitude: number
        }
    }
}

export interface IBoutiquePage {
    products: {
        name: string,
        price: number,
        size: string,
    }[]
}

export interface IEquipePage {
    team: ITeam
}