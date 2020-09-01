import { coverFragment, getDataMenu, productFragment, responsiveImageFragment, queryContent, teamFragment } from "Lib";
import { GetStaticProps } from "next";
import { Image } from "react-datocms";
import { IHomePage } from "Interfaces";

export const getStaticProps: GetStaticProps = async () => {
    const query = `query {
        allTeams(filter: {_status: {eq: published}}) {
            ...teamFragment
        }
        homePage {
            title
            cover {
                ...coverFragment
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
            ...productFragment
        }
    }
    ${coverFragment}
    ${teamFragment}
    ${productFragment}
    ${responsiveImageFragment}
    `;

    const data = await queryContent(query, { limit: 10 });
    const menu = await getDataMenu('homePage');
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
        <Image data={pages.home.cover.responsiveImage} />
        <p>Teams : {JSON.stringify(teams, null, 2)}</p>
        <br/>
        <p>Pages : {JSON.stringify(pages, null, 2)}</p>
        <br/>
        <p>Produits : {JSON.stringify(products, null, 2)}</p>
    </div>);
};