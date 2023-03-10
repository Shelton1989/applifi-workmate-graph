import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CommentUpdateManyWithoutPostInput } from "../inputs/CommentUpdateManyWithoutPostInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumMEDIA_TYPEFieldUpdateOperationsInput } from "../inputs/EnumMEDIA_TYPEFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { MealUpdateOneWithoutPostsInput } from "../inputs/MealUpdateOneWithoutPostsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PostUpdatemediaUrlInput } from "../inputs/PostUpdatemediaUrlInput";
import { ReactionUpdateManyWithoutPostInput } from "../inputs/ReactionUpdateManyWithoutPostInput";
export declare class PostUpdateWithoutAuthorInput {
    type?: EnumMEDIA_TYPEFieldUpdateOperationsInput | undefined;
    caption?: NullableStringFieldUpdateOperationsInput | undefined;
    mediaUrl?: PostUpdatemediaUrlInput | undefined;
    rating?: FloatFieldUpdateOperationsInput | undefined;
    isCommentsEnabled?: BoolFieldUpdateOperationsInput | undefined;
    canBeCounted?: BoolFieldUpdateOperationsInput | undefined;
    Meal?: MealUpdateOneWithoutPostsInput | undefined;
    Comments?: CommentUpdateManyWithoutPostInput | undefined;
    Reactions?: ReactionUpdateManyWithoutPostInput | undefined;
    postLink?: NullableStringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
