import { getDataMenu, queryContent } from "Lib";
import { GetStaticProps } from "next";
import { IBoutiquePage } from "Interfaces";

export const getStaticProps: GetStaticProps = async () => {
    const query = `query BoutiquePage {
        allProducts(filter: {_status: {eq: published}}) {
            name
            price
            sizes {
                name
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
        shopPage {
            title
            seo {
                title
                description
            }
            shopFile {
                url
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
            page: data.shopPage,
            products: data.allProducts,
        }
    };
  
};

export default function Boutique({ page, products }: IBoutiquePage) {
    return (<div>
        <p>{JSON.stringify(products, null, 2)}</p>
        <br/>
        <p>{JSON.stringify(page, null, 2)}</p>
    </div>);
};