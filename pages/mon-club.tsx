import { queryContent } from "Lib";
import { GetStaticProps } from "next";
import { IMonClubPage } from "Interfaces";


export const getStaticProps: GetStaticProps = async () => {
    const query = `query ClubPage {
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

export default function MonClub({ teams }: IMonClubPage) {
  return (<div>{JSON.stringify(teams, null, 2)}</div>);
}