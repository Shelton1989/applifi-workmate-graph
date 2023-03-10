import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdatemealIdsInput } from "../inputs/UserUpdatemealIdsInput";
import { UserUpdaterolesInput } from "../inputs/UserUpdaterolesInput";
export declare class UserUpdateManyMutationInput {
    uid?: StringFieldUpdateOperationsInput | undefined;
    uuid?: NullableStringFieldUpdateOperationsInput | undefined;
    username?: StringFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    roles?: UserUpdaterolesInput | undefined;
    firstName?: NullableStringFieldUpdateOperationsInput | undefined;
    lastName?: NullableStringFieldUpdateOperationsInput | undefined;
    avatar?: NullableStringFieldUpdateOperationsInput | undefined;
    coverImage?: NullableStringFieldUpdateOperationsInput | undefined;
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    biography?: NullableStringFieldUpdateOperationsInput | undefined;
    hasAcceptedTerms?: NullableBoolFieldUpdateOperationsInput | undefined;
    isFirstTimeUser?: NullableBoolFieldUpdateOperationsInput | undefined;
    isVerified?: NullableBoolFieldUpdateOperationsInput | undefined;
    mealIds?: UserUpdatemealIdsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
