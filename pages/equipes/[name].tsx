import { coverFragment, getDataMenu, managerFragment, queryContent, responsiveImageFragment, teamFragment } from "Lib";
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from "next";
import { IEquipePage } from "Interfaces";

export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext) => {
    const query = `query {
        team(filter: {_status: {eq: published}, slug: {eq: "` + ctx.params?.name + `"}}) {
            ...teamFragment
            cover {
                ...coverFragment
            }
            manager {
                ...managerFragment
            }
            managers {
                ...managerFragment
            }
        }
    }
    ${coverFragment}
    ${managerFragment}
    ${teamFragment}
    ${responsiveImageFragment}
    `;
    const data = await queryContent(query, { limit: 10 });
    const menu = await getDataMenu('team(filter: {_status: {eq: published}, slug: {eq: "' + ctx.params?.name + '"}})');
    return {
        props: {
            menu,
            team: data.team,
        }
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const query = `query {
        allTeams(filter: {_status: {eq: published}}) {
            slug
            category {
                slug
            }
        }
    }`;
    const data = await queryContent(query, { limit: 10 });
    const teams = data.allTeams.map((team: any) => {
        return {
            params: {
                category: team.category.slug,
                name: team.slug
            }
        };
    });
    return { paths: teams, fallback: false };
};

export default function Equipe({ team }: IEquipePage) {
    return (<div><p>{JSON.stringify(team, null, 2)}</p></div>);
};