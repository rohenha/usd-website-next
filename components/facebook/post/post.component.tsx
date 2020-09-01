import * as React from 'react';
import { IFacebookPostProps } from "Interfaces";

export function FacebookPostComponent({ post }: IFacebookPostProps) {
    return (
        <div className="fb_post">
            <p>{post.message}</p>
        </div>
    );
}