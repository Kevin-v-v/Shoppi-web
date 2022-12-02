export interface ProductID {
    success: boolean;
    msg:     string;
    data:    Data;
}

export interface Data {
    id:             string;
    title:          string;
    description:    string;
    user_name:      string;
    user_last_name: string;
    user_image_url: string;
    post_image_url: string;
    category:       string;
    whatsapp_url:   string;
}
