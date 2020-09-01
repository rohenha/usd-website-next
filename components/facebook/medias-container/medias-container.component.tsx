import * as React from 'react';
import {
    getFacebookContent
} from "Lib";
import {
    FacebookMediaComponent
} from "Components";
import { IFacebookMediasContainerProps, IFacebookMediasContainerState } from "Interfaces";

export class FacebookMediasContainerComponent extends React.Component<IFacebookMediasContainerProps, IFacebookMediasContainerState> {
    private offset: number = 0;
    private nbrPosts: number = 10;
    private constructor(props: IFacebookMediasContainerProps) {
        super(props);
        this.state = {
            medias: []
        };
    };

    private getMedias = () => {
        getFacebookContent("posts.limit(" + this.nbrPosts + ").offset(" + this.offset + "){message,full_picture,permalink_url}").then((res: any) => {
            this.setState({
                medias: [...this.state.medias, ...res]
            });
        });
    };

    private addMoreMedias = () => {
        this.offset += this.nbrPosts;
        this.getMedias();
    };

    public componentDidMount = this.getMedias;

    public render(): React.ReactElement<any> {
        return (
            <div className="fb_container">
                {this.state.medias.map((post: any) => (
                    <FacebookMediaComponent media={post} key={post.id} />
                ))}
                <button onClick={this.addMoreMedias}>Charger plus de médias</button>
            </div>
        );
    }
}