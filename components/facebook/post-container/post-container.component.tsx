import * as React from 'react';
import {
    getFacebookContent
} from "Lib";
import {
    FacebookPostComponent
} from "Components";
import { IFacebookPostsContainerProps, IFacebookPostsContainerState } from "Interfaces";

export class FacebookPostsContainerComponent extends React.Component<IFacebookPostsContainerProps, IFacebookPostsContainerState> {
    private offset: number = 0;
    private nbrPosts: number = 10;
    private constructor(props: IFacebookPostsContainerProps) {
        super(props);
        this.state = {
            posts: []
        };
    };

    private getPosts = () => {
        getFacebookContent("posts.limit(" + this.nbrPosts + ").offset(" + this.offset + "){message,full_picture,permalink_url}").then((res: any) => {
            this.setState({
                posts: [...this.state.posts, ...res]
            });
        });
    };

    private addMorePosts = () => {
        this.offset += this.nbrPosts;
        this.getPosts();
    };

    public componentDidMount = this.getPosts;

    public render(): React.ReactElement<any> {
        return (
            <div className="fb_container">
                {this.state.posts.map((post: any) => (
                    <FacebookPostComponent post={post} key={post.id} />
                ))}
                <button onClick={this.addMorePosts}>Charger plus de posts</button>
            </div>
        );
    }
}