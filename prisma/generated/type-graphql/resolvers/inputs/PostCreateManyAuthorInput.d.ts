import { PostCreatemediaUrlInput } from "../inputs/PostCreatemediaUrlInput";
export declare class PostCreateManyAuthorInput {
    id?: string | undefined;
    type: "SHORT_VIDEO" | "IMAGE" | "CAROUSEL";
    caption?: string | undefined;
    mediaUrl?: PostCreatemediaUrlInput | undefined;
    isCommentsEnabled?: boolean | undefined;
    productLink?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
