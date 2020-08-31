export interface IImage {
    responsiveImage: {
        srcSet: string,
        webpSrcSet: string,
        sizes: string,
        src: string,
        width: number,
        height: number,
        aspectRatio: number,
        alt: string,
        title: string,
        bgColor: string,
        base64: string
    }
}