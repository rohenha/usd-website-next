import { queryContent } from "@lib";



export async function getStaticProps() {
    const query = `query ClubPage {
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
    const data = await queryContent(query, 10);
    return {
        props: {
            data
        }
    };
}

export default function MonClub({ data }: { data: any }) {
  return (<div>{JSON.stringify(data, null, 2)}</div>);
}