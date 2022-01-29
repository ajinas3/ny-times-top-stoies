export interface NewsMultimedia {
    caption: string;
    copyright: string;
    subtype: string;
    type: string;
    url: string;
}

export interface News {
    title: string;
    abstract: string;
    byline: string;
    published_date: string;
    multimedia: NewsMultimedia[];
    url: string;
}

export interface NewsResponse {
    copyright: string;
    last_updated?: string;
    num_results?: number;
    results: News[];
    section?: string;
    status: string;
}

export interface SearchResultsMeta {
    hits: number;
    offset: number;
    time: number;
}

export interface SearchResults {
    docs: Object[];
    meta: SearchResultsMeta;
}

export interface SearchResponse {
    copyright: string;
    response: SearchResults;
    status: string;
}