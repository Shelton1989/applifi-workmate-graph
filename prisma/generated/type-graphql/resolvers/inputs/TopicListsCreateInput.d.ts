import { TopicListsCreatelistsInput } from "../inputs/TopicListsCreatelistsInput";
export declare class TopicListsCreateInput {
    id?: string | undefined;
    type: "TRENDING" | "LATEST" | "POPULAR";
    title: string;
    lists?: TopicListsCreatelistsInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
