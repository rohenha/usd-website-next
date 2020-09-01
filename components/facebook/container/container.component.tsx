import * as React from 'react';
import { 
    getFacebookGraph
} from "Lib";
import {
    FacebookPostComponent
} from "Components";
import { IFacebookContainerProps, IFacebookContainerState } from "Interfaces";

export class FacebookContainerComponent extends React.Component<IFacebookContainerProps, IFacebookContainerState> {

    private constructor(props: IFacebookContainerProps) {
        super(props);
        this.state = {
            posts: []
        };
    };

    componentDidMount = () => {
        const graph = getFacebookGraph();
        graph.get("unionsportivedionysienne", { fields: "posts{message}" }, (_err: any, res: any) => {
            this.setState({
                posts: res.posts.data
            });
        });
    };

    public render(): React.ReactElement<any> {
        return (
            <div className="fb_container">
                {this.state.posts.map((post: any) => (
                    <FacebookPostComponent post={post} key={post.id} />
                ))}
            </div>
        );
    }
}