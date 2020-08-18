import { queryContent } from "Lib";
import { GetStaticProps } from "next";
import { IHomePage } from "Interfaces";

export const getStaticProps: GetStaticProps = async () => {
    const query = `query HomePage {
        allTeams(filter: {_status: {eq: published}}) {
            name
            slug
        }
    }`;

    const data = await queryContent(query, 10);
    return {
        props: {
            teams: data.allTeams
        }
    };

}

export default function Home({ teams }: IHomePage) {
    return (
        <div><p>{JSON.stringify(teams, null, 2)}</p></div>
    );
}