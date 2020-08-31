import { GraphQLClient } from "graphql-request";
import { ICategory, IDatocms, ITeam } from "Interfaces";

export function request({ query, variables, preview }: IDatocms) {
    const endpoint = preview
        ? `https://graphql.datocms.com/preview`
        : `https://graphql.datocms.com/`;
    const client = new GraphQLClient(endpoint, {
        headers: {
            authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`
        }
    });
    return client.request(query, variables);
}

export function queryContent(query: string, variables: any) {
    return request({
        query,
        variables,
        preview: false
    });
}

export async function getDataMenu() {
    const query = `query HomePage {
        categoriesOrder() {
            categories {
                id
                name
                slug
            }
        }
        allTeams(orderBy: team_ASC, filter: {_status: {eq: published}}) {
            name
            slug
            team
            category {
                id
            }
        }
    }`;

    const data = await queryContent(query, { limit: 10 });
    const teamsArray: any[] = [];

    data.categoriesOrder.categories.map(function(category: ICategory) {
        const teams = data.allTeams.filter((team: ITeam) => {
            return team.category.id == category.id;
        });
        teams.sort(function (a: ITeam, b: ITeam) {
            return a.team > b.team;
        });
        teams.map((team: ITeam) => {
            teamsArray.push(team);
        })
    });

    return {
        categories: data.categoriesOrder.categories,
        teams: teamsArray
    };
}