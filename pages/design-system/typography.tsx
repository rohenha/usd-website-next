import { 
    getDataMenu,
} from "Lib";
import {
    TitleComponent
} from 'Components';
import * as React from 'react';
import { GetStaticProps } from "next";
import { Container } from 'react-bootstrap';

export const getStaticProps: GetStaticProps = async () => {
    const menu = await getDataMenu('homePage');
    return {
        props: {
            menu
        }
    };
};

export default function Typography() {

    return (<React.Fragment>
        <Container>
            <TitleComponent balise="h1" text="Titre de niveau 1" />
            <TitleComponent balise="h2" text="Titre de niveau 2" />
            <h3>Titre de niveau 3</h3>
            <h4>Titre de niveau 4</h4>
            <p className="text_team">Sénior A</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, tenetur? Quibusdam expedita labore, alias suscipit numquam a porro accusamus, iusto vel cum laborum modi at! Impedit, esse. Voluptatem, nam nostrum!</p>
            <a href="#">Lien normal vers une page</a>
        </Container>
    </React.Fragment>);
};