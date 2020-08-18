import { queryContent } from "Lib";
import { GetStaticProps } from "next";
import { IEquipesPage } from "Interfaces";

export const getStaticProps: GetStaticProps = async () => {
    const query = `query TeamsPage {
        allTeams(filter: {_status: {eq: published}}) {
            name
            slug
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
            teams: data.allTeams
        }
    };
}

export default function Equipes({ teams }: IEquipesPage) {
    return (<div>{JSON.stringify(teams, null, 2)}</div>);
}