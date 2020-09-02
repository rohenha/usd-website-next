import * as React from 'react';
import Link from "next/link";
import { renderMetaTags } from "react-datocms";
import { useRouter } from 'next/router'
import Head from "next/head";
import { IHeaderComponentProps, ITeamMenu } from "Interfaces";
import { Container } from 'react-bootstrap';

import style from './header.module.sass'

export function HeaderComponent({ menu }: IHeaderComponentProps) {
    const router = useRouter();
    return (
        <React.Fragment>
            <Head>
                {/* <html lang="fr" /> */}
                {renderMetaTags(menu.site.favicon)}
                <title>{menu.seo.title !== "" ? menu.seo.title : menu.site.globalSeo.fallbackSeo.title}</title>
                <meta name="description" content={menu.seo.description !== "" ? menu.seo.description : menu.site.globalSeo.fallbackSeo.description} />
                <meta name="theme-color" content="#FFFFFF"/>
                <meta name="msapplication-navbutton-color" content="#FFFFFF"/>
                <meta name="apple-mobile-web-app-status-bar-style" content="#FFFFFF"/>
                <meta property="og:local" content="fr" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={menu.seo.title !== "" ? menu.seo.title : menu.site.globalSeo.fallbackSeo.title}/>
                <meta property="og:description" content={menu.seo.description !== "" ? menu.seo.description : menu.site.globalSeo.fallbackSeo.description} />
                <meta property="og:url" content={"https://www.us-dionysienne.fr" + router.asPath} />
                <meta property="og:site_name" content={menu.site.globalSeo.siteName} />
                <meta name="twitter:card" content="summary" /> 
                <meta name="twitter:description" content={menu.seo.description !== "" ? menu.seo.description : menu.site.globalSeo.fallbackSeo.description} />
                <meta name="twitter:title" content={menu.seo.title !== "" ? menu.seo.title : menu.site.globalSeo.fallbackSeo.title} />
                <meta name="twitter:site" content={"https://www.us-dionysienne.fr" + router.asPath}/>
                <meta name="twitter:creator" content="Romain Breton" />
            </Head>
            <header className={style.header}>
                <Container>
                    <nav>
                        <Link href="/"><a><img src={menu.site.logo.url} alt="" title={menu.site.globalSeo.siteName} /></a></Link>
                        <ul>
                            <li>
                                <Link href="/equipes"><a className="text_menu">Équipes</a></Link>
                                <ul>
                                    {menu.teams.map((team: ITeamMenu, index: number) => (
                                        <li key={index}>
                                            <Link href={"/equipes/" + team.slug}>
                                                <a className="text_menu">{team.name}</a>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li><Link href="/medias"><a className="text_menu">Médias</a></Link></li>
                            <li><Link href="/contact"><a className="text_menu">Contact</a></Link></li>
                            <li><Link href="/boutique"><a className="text_menu">Boutique</a></Link></li>
                            <li><Link href="/mon-club"><a className="text_menu">Mon club</a></Link></li>
                        </ul>
                    </nav>
                </Container>
            </header>
        </React.Fragment>
    );
}