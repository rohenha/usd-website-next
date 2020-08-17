import { queryContent } from "@lib";

export async function getStaticProps() {
    const query = `query BoutiquePage {
        contact {
            email
            president {
                email
                name
                phone
                surname
            }
            presidentJeunes {
                email
                name
                surname
                phone
            }
            adresse {
                latitude
                longitude
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

export default function Boutique({ data }: { data: any }) {
    return <div>{JSON.stringify(data, null, 2)}</div>;
}