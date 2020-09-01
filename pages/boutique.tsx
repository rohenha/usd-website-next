import { getDataMenu, productFragment, queryContent, responsiveImageFragment } from "Lib";
import { GetStaticProps } from "next";
import { IBoutiquePage } from "Interfaces";

export const getStaticProps: GetStaticProps = async () => {
    const query = `query {
        allProducts(filter: {_status: {eq: published}}) {
            ...productFragment
            sizes {
                name
            }
        }
        shopPage {
            title
            shopFile {
                url
            }
            cover {
                responsiveImage {
                    ...responsiveImageFragment
                }
            }
        }
    }
    ${productFragment}
    ${responsiveImageFragment}
    `;
    const data = await queryContent(query, { limit: 10 });
    const menu = await getDataMenu('shopPage');
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