import { queryContent } from "@lib";



export async function getStaticProps() {
    const CONTACT_QUERY = `query ContactPage {
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
    const data = await queryContent(CONTACT_QUERY, 10);
    return {
        props: {
            data
        }
    };

}

export default function Contact({ data }: { data: any }) {
    return <div>{JSON.stringify(data, null, 2)}</div>;
}