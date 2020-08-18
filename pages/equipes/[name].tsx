import { getDataMenu, queryContent } from "Lib";
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from "next";
import { IEquipePage } from "Interfaces";


export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext) => {
    const query = `query HomePage {
        allTeams(filter: {_status: {eq: published}}) {
            name
            slug
            category {
                id
            }
        }
        team(filter: {_status: {eq: published}, slug: {eq: "` + ctx.params?.name + `"}}) {
            name
            category {
                name
            }
            managers {
                name
                surname
            }
        }
    }`;
    const data = await queryContent(query, 10);
    const menu = await getDataMenu();
    return {
        props: {
            menu,
            team: data.team,
            teams: data.allTeams
        }
    };
}

export const getStaticPaths: GetStaticPaths = async () => {
    const query = `query Teams {
        allTeams(filter: {_status: {eq: published}}) {
            slug
            category {
                slug
            }
        }
    }`;
    const data = await queryContent(query, 10);
    const teams = data.allTeams.map((team: any) => {
        return {
            params: {
                category: team.category.slug,
                name: team.slug
            }
        };
    });
    return { paths: teams, fallback: false };
}

export default function Equipe({ team }: IEquipePage) {
    return (<div><p>{JSON.stringify(team, null, 2)}</p></div>);
}