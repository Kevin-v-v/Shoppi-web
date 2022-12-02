export interface LoginResponse {
    success:   boolean;
    msg:       string;
    user_data: UserData;
}

export interface UserData {
    username:    string;
    name:        string;
    last_name:   string;
    email:       string;
    phone:       string;
    image:       string;
    user_type:   number;
    user_status: number;
}
