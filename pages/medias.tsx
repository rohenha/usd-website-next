import { getDataMenu, queryContent } from "Lib";
import { GetStaticProps } from "next";
import { IMediasPage } from "Interfaces";

export const getStaticProps: GetStaticProps = async () => {
    const query = `query MediasPage {
        mediasPage {
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
        }
    }`;
    const data = await queryContent(query, { limit: 10 });
    const menu = await getDataMenu();
    return {
        props: { 
            menu,
            page: data.mediasPage
        }
    };
};

export default function Medias({ page }: IMediasPage) {
    return (<div>{JSON.stringify(page, null, 2)}</div>);
};