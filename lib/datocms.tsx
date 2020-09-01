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

export const responsiveImageFragment = `
    fragment responsiveImageFragment on ResponsiveImage {
        srcSet
        webpSrcSet
        sizes
        src
        width
        height
        aspectRatio
        alt
        title
        bgColor
        base64
    }
`;

export const coverFragment = `
    fragment coverFragment on FileField {
        responsiveImage(imgixParams: { maxW: "1440", w: 1440, fit: clip, dpr: 1, auto: compress }, sizes: "100vw") {
            ...responsiveImageFragment
        }
    }
`;

export const managerFragment = `
    fragment managerFragment on ManagerRecord {
        surname
        name
        email
        phone
        portrait {
            responsiveImage(imgixParams: { maxW: "1920", w: 1920, fit: clip }) {
                ...responsiveImageFragment
            }
        }
    }
`;

export const productFragment = `
    fragment productFragment on ProductRecord {
        name
        price
        cover{
            responsiveImage {
                ...responsiveImageFragment
            }
        }
    }
`;

export const teamFragment = `
    fragment teamFragment on TeamRecord {
        name
        slug
        category {
            name
        }
    }
`;

export function queryContent(query: string, variables: any) {
    return request({
        query,
        variables,
        preview: false
    });
}

export async function getDataMenu(page: string) {
    const query = `query HomePage {
        categoriesOrder() {
            categories {
                id
                name
                slug
            }
        }
        allTeams(orderBy: team_ASC, filter: {_status: {eq: published}}) {
            ...teamFragment
            team
            category {
                id
            }
        }
        page: ` + page + `{
            seo {
                title
                description
            }
            
        }
        site: _site {
            favicon: faviconMetaTags {
                attributes
                content
                tag
            }
            logo: favicon {
                url(imgixParams: {w: "70"})
              }
            globalSeo {
                facebookPageUrl
                siteName
                titleSuffix
                fallbackSeo {
                    description
                    title
                    twitterCard
                }
            }
        }
    }
    ${teamFragment}
    `;

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
        seo: data.page.seo,
        site: data.site,
        teams: teamsArray
    };
}