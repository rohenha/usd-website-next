import { getDataMenu, queryContent } from "Lib";
import { GetStaticProps } from "next";
import { IContactPage } from "Interfaces";

export const getStaticProps: GetStaticProps = async () => {
    const query = `query ContactPage {
        allTeams(filter: {_status: {eq: published}}) {
            name
            slug
            category {
                id
            }
        }
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
    const menu = await getDataMenu();
    return {
        props: {
            menu,
            contact: data.contact,
            teams: data.allTeams
        }
    };

}

export default function Contact({ contact }: IContactPage) {
    return <div>{JSON.stringify(contact, null, 2)}</div>;
}