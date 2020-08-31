import { getDataMenu, queryContent } from "Lib";
import { GetStaticProps } from "next";
import { IEquipesPage } from "Interfaces";

export const getStaticProps: GetStaticProps = async () => {
    const query = `query TeamsPage {
        allTeams(filter: {_status: {eq: published}}) {
            name
            slug
            category {
                name
                id
            }
            managers {
                name
                surname
            }
        }
        teamsPage {
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
            page: data.teamsPage,
            teams: data.allTeams
        }
    };
}

export default function Equipes({ page, teams }: IEquipesPage) {
    return (<div>
        <p>{JSON.stringify(teams, null, 2)}</p>
        <br/>
        <p>{JSON.stringify(page, null, 2)}</p>
    </div>);
}