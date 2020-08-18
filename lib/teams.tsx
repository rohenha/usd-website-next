import { queryContent } from "@lib";

export async function getAllTeamSlug() {
    const query = `query Teams {
        allTeams(filter: {_status: {eq: published}}) {
            slug
            category {
                slug
            }
        }
    }`;

    const data = await queryContent(query, 10);
    return data.allTeams.map(team => {
        return {
            params: {
                category: team.category.slug,
                name: team.slug
            }
        };
    });
}