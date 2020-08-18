import { queryContent } from "Lib";
import { ICategory, ITeam } from "Interfaces";

export async function getDataMenu() {
    const query = `query HomePage {
        allCategories(orderBy: order_ASC) {
            name
            order
            slug
            id
        }
        allTeams(orderBy: team_ASC, filter: {_status: {eq: published}}) {
            name
            slug
            team
            category {
                id
                order
            }
        }
    }`;

    const data = await queryContent(query, 10);

    data.allTeams.sort(function (a: ITeam, b: ITeam) {
        return b.category.order - a.category.order;
    });
    data.allCategories.sort(function (a: ICategory, b: ICategory) {
        return a.order - b.order;
    });
    return {
        categories: data.allCategories,
        teams: data.allTeams
    };
}