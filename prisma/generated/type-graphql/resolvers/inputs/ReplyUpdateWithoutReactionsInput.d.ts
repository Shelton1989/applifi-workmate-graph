import { CommentUpdateOneRequiredWithoutRepliesInput } from "../inputs/CommentUpdateOneRequiredWithoutRepliesInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutRepliesInput } from "../inputs/UserUpdateOneRequiredWithoutRepliesInput";
export declare class ReplyUpdateWithoutReactionsInput {
    text?: StringFieldUpdateOperationsInput | undefined;
    Comment?: CommentUpdateOneRequiredWithoutRepliesInput | undefined;
    Author?: UserUpdateOneRequiredWithoutRepliesInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
