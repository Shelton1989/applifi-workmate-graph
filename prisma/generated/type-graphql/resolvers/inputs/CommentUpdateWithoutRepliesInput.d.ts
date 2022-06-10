import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { PostUpdateOneRequiredWithoutCommentsInput } from "../inputs/PostUpdateOneRequiredWithoutCommentsInput";
import { ReactionUpdateManyWithoutCommentInput } from "../inputs/ReactionUpdateManyWithoutCommentInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutCommentsInput } from "../inputs/UserUpdateOneRequiredWithoutCommentsInput";
export declare class CommentUpdateWithoutRepliesInput {
    text?: StringFieldUpdateOperationsInput | undefined;
    Post?: PostUpdateOneRequiredWithoutCommentsInput | undefined;
    Author?: UserUpdateOneRequiredWithoutCommentsInput | undefined;
    Reactions?: ReactionUpdateManyWithoutCommentInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
