import * as React from 'react';
import Link from "next/link";
import { IHeaderComponentProps, IHeaderComponentState, ITeamMenu } from "Interfaces";

import style from './header.module.sass'

export class HeaderComponent extends React.Component<IHeaderComponentProps, IHeaderComponentState> {
    public render(): React.ReactElement<any> {
        return (
            <header className={style.header}>
                <nav>
                    <ul>
                        <li><Link href="/"><a>Accueil</a></Link></li>
                        <li>
                            <Link href="/equipes"><a>Équipes</a></Link>
                            <ul>
                                {this.props.menu.teams.map((team: ITeamMenu, index: any) => (
                                    <li key={index}>
                                        <Link href={"/equipes/" + team.slug}>
                                            <a>{team.name}</a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li><Link href="/medias"><a>Médias</a></Link></li>
                        <li><Link href="/contact"><a>Contact</a></Link></li>
                        <li><Link href="/boutique"><a>Boutique</a></Link></li>
                        <li><Link href="/mon-club"><a>Mon club</a></Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}