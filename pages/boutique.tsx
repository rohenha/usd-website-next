import { queryContent } from "Lib";
import { GetStaticProps } from "next";
import { IBoutiquePage } from "Interfaces";


export const getStaticProps: GetStaticProps = async () => {
    const query = `query BoutiquePage {
        allTeams(filter: {_status: {eq: published}}) {
            name
            slug
        }
        allProduits {
            name
            price
            size
        }
    }`;
    const data = await queryContent(query, 10);
    return {
        props: {
            products: data.allProduits,
            teams: data.allTeams
        }
    };
  
  }

export default function Boutique({ products }: IBoutiquePage) {
    return <div>{JSON.stringify(products, null, 2)}</div>;
}