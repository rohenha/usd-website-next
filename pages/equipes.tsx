import { getDataMenu, queryContent } from "Lib";
import { GetStaticProps } from "next";
import { IEquipesPage } from "Interfaces";

export const getStaticProps: GetStaticProps = async () => {
    const query = `query TeamsPage {
        allTeams(filter: {_status: {eq: published}}) {
            name
            slug
            category {
                name
                id
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
            teams: data.allTeams
        }
    };
}

export default function Equipes({ teams }: IEquipesPage) {
    return (<div>{JSON.stringify(teams, null, 2)}</div>);
}