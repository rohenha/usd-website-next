import { getDataMenu, queryContent } from "Lib";
import { GetStaticProps } from "next";
import { IMonClubPage } from "Interfaces";

export const getStaticProps: GetStaticProps = async () => {
    const query = `query ClubPage {
        allConvocations(filter: {_status: {eq: published}}, orderBy: _updatedAt_DESC) {
            file {
                url
            }
            updatedAt
        }
        myClubPage {
            title
            seo {
                title
                description
            }
        }
    }`;
    const data = await queryContent(query, { limit: 10 });
    const menu = await getDataMenu();
    return {
        props: {
            convocations: data.allConvocations,
            menu,
            page: data.myClubPage
        }
    };
};

export default function MonClub({ convocations, page }: IMonClubPage) {
    return (<div>
        <p>{JSON.stringify(convocations, null, 2)}</p>
        <br/>
        <p>{JSON.stringify(page, null, 2)}</p>
    </div>);
};