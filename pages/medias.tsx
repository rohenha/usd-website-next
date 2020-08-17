import { queryContent } from "@lib";

export async function getStaticProps() {
    const query = `query MediasPage {
        team {
            name
        }
    }`;
    const data = await queryContent(query, 10);
    return {
        props: { data }
    };
}

export default function Medias({ data }: { data: any }) {
    return <div>{JSON.stringify(data, null, 2)}</div>;
}