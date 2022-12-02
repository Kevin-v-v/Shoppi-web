export interface GetProducts {
    headers:    string;
    status:     number;
    statusText: string;
    url:        string;
    ok:         boolean;
    type:       number;
    body:       Body;
}

export interface Body {
    success:        boolean;
    page:           number;
    total_pages:    number;
    document_count: number;
    data:           Datum[];
}

export interface Datum {
    id:             string;
    title:          string;
    description:    string;
    user_username:  string;
    post_status:    number;
    user_name:      string;
    user_last_name: string;
    image:          string;
    category:       string;
    whatsapp_url:   string;
}
