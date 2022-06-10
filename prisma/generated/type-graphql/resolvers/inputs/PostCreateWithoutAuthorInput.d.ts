import { CommentCreateNestedManyWithoutPostInput } from "../inputs/CommentCreateNestedManyWithoutPostInput";
import { PostCreatemediaUrlInput } from "../inputs/PostCreatemediaUrlInput";
import { ReactionCreateNestedManyWithoutPostInput } from "../inputs/ReactionCreateNestedManyWithoutPostInput";
export declare class PostCreateWithoutAuthorInput {
    id?: string | undefined;
    type: "SHORT_VIDEO" | "IMAGE" | "CAROUSEL";
    caption?: string | undefined;
    mediaUrl?: PostCreatemediaUrlInput | undefined;
    isCommentsEnabled?: boolean | undefined;
    Comments?: CommentCreateNestedManyWithoutPostInput | undefined;
    Reactions?: ReactionCreateNestedManyWithoutPostInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
