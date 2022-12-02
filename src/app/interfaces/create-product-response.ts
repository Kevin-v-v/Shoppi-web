export interface CreateProductResponse {
    headers:    Headers;
    status:     number;
    statusText: string;
    url:        string;
    ok:         boolean;
    type:       number;
    body:       Body;
}

export interface Body {
    success: boolean;
    msg:     string;
}

export interface Headers {
    normalizedNames: NormalizedNames;
    lazyUpdate:      null;
}

export interface NormalizedNames {
}
