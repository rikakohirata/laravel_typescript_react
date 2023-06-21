export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };

    items: Item[];
}

// ユーザー情報
export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
    
}

// 商品情報
export type Item = {
    id: number; 
    item_name: string; 
    category: string; 
    price: number; 
}



