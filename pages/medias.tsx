import { coverFragment, getDataMenu, queryContent, responsiveImageFragment } from "Lib";
import { GetStaticProps } from "next";
import { IMediasPage } from "Interfaces";
import { FacebookMediasContainerComponent } from "Components";

export const getStaticProps: GetStaticProps = async () => {
    const query = `query {
        mediasPage {
            title
            cover {
                ...coverFragment
            }
        }
    }
    ${coverFragment}
    ${responsiveImageFragment}
    `;
    const data = await queryContent(query, { limit: 10 });
    const menu = await getDataMenu('mediasPage');
    return {
        props: { 
            menu,
            page: data.mediasPage
        }
    };
};

export default function Medias({ page }: IMediasPage) {
    return (<div>
        <FacebookMediasContainerComponent/>
        <p>{JSON.stringify(page, null, 2)}</p>
    </div>);
};