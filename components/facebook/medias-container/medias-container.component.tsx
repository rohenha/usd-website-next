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
        getFacebookContent("albums.limit(" + this.nbrPosts + ").offset(" + this.offset + "){photos{webp_images}}").then((res: any) => {
            console.log(res.albums.data);
            this.setState({
                medias: [...this.state.medias, ...res.albums.data]
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
                {this.state.medias.map((medias: any) => {
                    if (medias.photos) {
                        return medias.photos.data.map((photo: any) => (
                            <FacebookMediaComponent media={photo} key={photo.id} />
                        )) 
                    }
                })}
                <button onClick={this.addMoreMedias}>Charger plus de médias</button>
            </div>
        );
    }
}