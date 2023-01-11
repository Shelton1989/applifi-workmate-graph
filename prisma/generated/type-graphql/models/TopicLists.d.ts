export declare class TopicLists {
    id: string;
    type: "TRENDING" | "LATEST" | "POPULAR" | "FEATURED";
    title: string;
    lists: number[];
    createdAt: Date;
    updatedAt: Date;
}
