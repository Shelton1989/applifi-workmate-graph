import { CommentCreateNestedManyWithoutPostInput } from "../inputs/CommentCreateNestedManyWithoutPostInput";
import { PostCreatemediaUrlInput } from "../inputs/PostCreatemediaUrlInput";
import { UserCreateNestedOneWithoutPostsInput } from "../inputs/UserCreateNestedOneWithoutPostsInput";
export declare class PostCreateWithoutReactionsInput {
    id?: string | undefined;
    type: "SHORT_VIDEO" | "IMAGE" | "CAROUSEL";
    caption?: string | undefined;
    mediaUrl?: PostCreatemediaUrlInput | undefined;
    isCommentsEnabled?: boolean | undefined;
    Author: UserCreateNestedOneWithoutPostsInput;
    Comments?: CommentCreateNestedManyWithoutPostInput | undefined;
    productLink?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
