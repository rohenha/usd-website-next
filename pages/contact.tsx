import { getDataMenu, queryContent } from "Lib";
import { GetStaticProps } from "next";
import { IContactPage } from "Interfaces";

export const getStaticProps: GetStaticProps = async () => {
    const query = `query ContactPage {
        contactPage {
            title
            seo {
                title
                description
            }
            cover {
                responsiveImage {
                    srcSet
                    webpSrcSet
                    sizes
                    src
                    width
                    height
                    aspectRatio
                    alt
                    title
                    bgColor
                    base64
                }
            }
            email
            coversStade {
                responsiveImage {
                    srcSet
                    webpSrcSet
                    sizes
                    src
                    width
                    height
                    aspectRatio
                    alt
                    title
                    bgColor
                    base64
                }
              }
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
    const data = await queryContent(query, { limit: 10 });
    const menu = await getDataMenu();
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