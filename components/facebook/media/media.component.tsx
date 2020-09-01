import * as React from 'react';
import { IFacebookMediaProps } from "Interfaces";

export function FacebookMediaComponent({ media }: IFacebookMediaProps) {
    return (
        <div className="fb_media">
            <img src={media.webp_images[0].source} alt=""/>
        </div>
    );
}