import { queryContent } from "@lib";


export async function getStaticProps() {
    const query = `query HomePage {
        allTeams(filter: {_status: {eq: published}}) {
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
            data
        }
    };

}

export default function Home({ data, paths }: { data: any, paths: any }) {
    return (<div><p>{JSON.stringify(data, null, 2)}</p></div>);
}