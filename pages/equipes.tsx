import { queryContent } from "@lib";


const EQUIPES_QUERY = `query TeamsPage {
    team(filter: {_status: {eq: published}}) {
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

export async function getStaticProps() {
    const data = await queryContent(EQUIPES_QUERY, 10);
    return {
        props: {
            data
        }
    };
}

export default function Equipes({ data }: { data: any }) {
    return (<div>{JSON.stringify(data, null, 2)}</div>);
}