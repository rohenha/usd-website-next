import { coverFragment, getDataMenu, queryContent, responsiveImageFragment, teamFragment } from "Lib";
import { GetStaticProps } from "next";
import { IEquipesPage } from "Interfaces";

export const getStaticProps: GetStaticProps = async () => {
    const query = `query {
        allTeams(filter: {_status: {eq: published}}) {
            ...teamFragment
            category {
                name
                id
            }
            cover {
                responsiveImage {
                    ...responsiveImageFragment
                }
            }
            manager {
                name
                surname
            }
        }
        teamsPage {
            title
            cover {
                ...coverFragment
            }
        }
    }
    ${coverFragment}
    ${teamFragment}
    ${responsiveImageFragment}
    `;
    const data = await queryContent(query, { limit: 10 });
    const menu = await getDataMenu('teamsPage');
    return {
        props: {
            menu,
            page: data.teamsPage,
            teams: data.allTeams
        }
    };
}

export default function Equipes({ page, teams }: IEquipesPage) {
    return (<div>
        <p>{JSON.stringify(teams, null, 2)}</p>
        <br/>
        <p>{JSON.stringify(page, null, 2)}</p>
    </div>);
}