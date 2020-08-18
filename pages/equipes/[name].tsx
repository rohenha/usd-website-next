import { getAllTeamSlug, queryContent } from "@lib";

export async function getStaticProps({ params }) {
    const query = `query HomePage {
        team(filter: {_status: {eq: published}, slug: {eq: "` + params.name + `"}}) {
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
    return {
        props: {
            data,
            params
        }
    };
}

export async function getStaticPaths() {
    const query = `query Teams {
        allTeams(filter: {_status: {eq: published}}) {
            slug
            category {
                slug
            }
        }
    }`;

    const data = await queryContent(query, 10);
    const teams = data.allTeams.map(team => {
        return {
            params: {
                category: team.category.slug,
                name: team.slug
            }
        };
    });
    return { paths: teams, fallback: false };
}

export default function Equipe({ data, params }: { data: any, params: any }) {
    return (<div><p>{JSON.stringify(data, null, 2)}</p><p>{JSON.stringify(params, null, 2)}</p></div>);
}