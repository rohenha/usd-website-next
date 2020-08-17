import { request } from "./datocms";

export function queryContent(query: string, limit: number) {
    return request({
        query: query,
        variables: { limit: limit },
        preview: null
    });
}