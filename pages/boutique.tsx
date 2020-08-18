import { getDataMenu, queryContent } from "Lib";
import { GetStaticProps } from "next";
import { IBoutiquePage } from "Interfaces";


export const getStaticProps: GetStaticProps = async () => {
    const query = `query BoutiquePage {
        allTeams(filter: {_status: {eq: published}}) {
            name
            slug
            category {
                id
            }
        }
        allProduits {
            name
            price
            size
        }
    }`;
    const data = await queryContent(query, 10);
    const menu = await getDataMenu();
    return {
        props: {
            menu,
            products: data.allProduits,
            teams: data.allTeams
        }
    };
  
  }

export default function Boutique({ products }: IBoutiquePage) {
    return <div>{JSON.stringify(products, null, 2)}</div>;
}