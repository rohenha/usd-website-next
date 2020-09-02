import { 
    getDataMenu,
} from "Lib";
import * as React from 'react';
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
    const menu = await getDataMenu('homePage');
    return {
        props: {
            menu
        }
    };
};

export default function Structure() {

    return (<React.Fragment>
    </React.Fragment>);
};