declare type UseCreateBlockRevision = {
    parent?: number;
    date?: string;
    date_gmt?: string;
    slug?: number;
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private';
    password?: string;
    title?: object;
    content?: object;
    template?: string;
};
declare type UseRetrieveBlockRevision = {
    parent?: number;
    context?: 'view' | 'embed' | 'edit';
};
export declare const useCreateBlockRevision: (id: number, options: UseCreateBlockRevision) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useRetrieveBlockRevision: (id: number, options: UseRetrieveBlockRevision) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export {};
