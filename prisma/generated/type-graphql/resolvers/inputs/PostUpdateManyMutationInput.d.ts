import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumMEDIA_TYPEFieldUpdateOperationsInput } from "../inputs/EnumMEDIA_TYPEFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PostUpdatemediaUrlInput } from "../inputs/PostUpdatemediaUrlInput";
export declare class PostUpdateManyMutationInput {
    type?: EnumMEDIA_TYPEFieldUpdateOperationsInput | undefined;
    caption?: NullableStringFieldUpdateOperationsInput | undefined;
    mediaUrl?: PostUpdatemediaUrlInput | undefined;
    rating?: IntFieldUpdateOperationsInput | undefined;
    isCommentsEnabled?: BoolFieldUpdateOperationsInput | undefined;
    canBeCounted?: BoolFieldUpdateOperationsInput | undefined;
    postLink?: NullableStringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
