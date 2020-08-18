import { getDataMenu, queryContent } from "Lib";
import { GetStaticProps } from "next";
import { IMediasPage } from "Interfaces";



export const getStaticProps: GetStaticProps = async () => {
    const query = `query MediasPage {
        allTeams(filter: {_status: {eq: published}}) {
            name
            slug
            category {
                id
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

export default function Medias({ teams }: IMediasPage) {
    return <div>{JSON.stringify(teams, null, 2)}</div>;
}