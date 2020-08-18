import { getDataMenu, queryContent } from "Lib";
import { GetStaticProps } from "next";
import { IHomePage } from "Interfaces";

export const getStaticProps: GetStaticProps = async () => {
    const query = `query HomePage {
        allTeams(filter: {_status: {eq: published}}) {
            name
            slug
            category {
                id
                order
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

export default function Home({ teams }: IHomePage) {
    return (
        <div><p>{JSON.stringify(teams, null, 2)}</p></div>
    );
}