import * as React from 'react';
import { IFacebookMediaProps } from "Interfaces";

export function FacebookMediaComponent({ media }: IFacebookMediaProps) {
    return (
        <div className="fb_media">
            <p>{media.message}</p>
        </div>
    );
}