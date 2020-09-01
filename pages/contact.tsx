import { coverFragment, getDataMenu, managerFragment, queryContent, responsiveImageFragment } from "Lib";
import { GetStaticProps } from "next";
import { IContactPage } from "Interfaces";

export const getStaticProps: GetStaticProps = async () => {
    const query = `query {
        contactPage {
            title
            cover {
                ...coverFragment
            }
            email
            coversStade {
                responsiveImage {
                    ...responsiveImageFragment
                }
            }
            president {
                ...managerFragment
            }
            presidentJeunes {
                ...managerFragment
            }
            adresse {
                latitude
                longitude
            }
        }
    }
    ${coverFragment}
    ${managerFragment}
    ${responsiveImageFragment}
    `;
    const data = await queryContent(query, { limit: 10 });
    const menu = await getDataMenu('contactPage');
    return {
        props: {
            menu,
            page: data.contactPage
        }
    };

};

export default function Contact({ page }: IContactPage) {
    return <div>{JSON.stringify(page, null, 2)}</div>;
};