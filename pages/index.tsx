import { getDataMenu, queryContent } from "Lib";
import { GetStaticProps } from "next";
import { IHomePage } from "Interfaces";

export const getStaticProps: GetStaticProps = async () => {
    const query = `query HomePage {
        allTeams(filter: {_status: {eq: published}}) {
            name
            slug
            category {
                id
            }
        }
        homePage {
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
        teamsPage {
            title
        }
        shopPage {
            title
            description
        }
        allProducts(filter: {_status: {eq: published}}) {
            name
            price
            cover {
                responsiveImage {
                    alt
                    aspectRatio
                    base64
                    bgColor
                    height
                    sizes
                    src
                    srcSet
                    title
                    webpSrcSet
                    width
                }
            }
        }
    }`;

    const data = await queryContent(query, { limit: 10 });
    const menu = await getDataMenu();
    return {
        props: {
            menu,
            pages: {
                home: data.homePage,
                teams: data.teamsPage,
                shop: data.shopPage
            },
            products: data.allProducts,
            teams: data.allTeams
        }
    };
};

export default function Home({ pages, products, teams }: IHomePage) {
    return (<div>
            <p>Teams : {JSON.stringify(teams, null, 2)}</p>
            <br/>
            <p>Pages : {JSON.stringify(pages, null, 2)}</p>
            <br/>
            <p>Produits : {JSON.stringify(products, null, 2)}</p>
    </div>);
};