declare type UsePostRevisions = {
    readonly parent?: number;
    readonly context?: 'view' | 'embed' | 'edit';
    readonly page?: number;
    readonly per_page?: number;
    readonly search?: string;
    readonly exclude?: number[];
    readonly include?: number[];
    readonly offset?: number;
    readonly order?: 'asc' | 'desc';
    readonly orderby?: 'date' | 'id' | 'include' | 'relevance' | 'slug' | 'include_slugs' | 'title';
};
declare type UseCreatePostRevision = {
    readonly parent?: number;
    readonly date?: string | null;
    readonly date_gmt?: string | null;
    readonly slug?: string;
    readonly status?: 'publish' | 'future' | 'draft' | 'pending' | 'private';
    readonly password?: string;
    readonly title?: object;
    readonly content?: object;
    readonly author?: number;
    readonly excerpt?: object;
    readonly featured_media?: number;
    readonly comment_status?: 'open' | 'closed';
    readonly ping_status?: 'open' | 'closed';
    readonly format?: 'standard' | 'aside' | 'chat' | 'gallery' | 'link' | 'image' | 'quote' | 'status' | 'video' | 'audio';
    readonly meta?: object;
    readonly sticky?: boolean;
    readonly template?: string;
    readonly categories?: number[];
    readonly tags?: number[];
};
declare type UseRetrievePostRevision = {
    readonly parent?: number;
    readonly id?: number;
    readonly context?: 'view' | 'embed' | 'edit';
};
declare type UseDeletePostRevision = {
    readonly parent?: number;
    readonly force?: boolean;
};
export declare const usePostRevisions: (parent: number, options?: UsePostRevisions | undefined) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useCreatePostRevision: (parent: number, options: UseCreatePostRevision) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useRetrievePostRevision: (parent: number, type: "revisions" | "autosaves", options: UseRetrievePostRevision) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useDeletePostRevision: (parent: number, id: number, options?: UseDeletePostRevision | undefined) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export {};
