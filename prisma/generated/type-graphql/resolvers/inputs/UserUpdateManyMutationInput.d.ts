import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableEnumROLEFieldUpdateOperationsInput } from "../inputs/NullableEnumROLEFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdatefollowerIdsInput } from "../inputs/UserUpdatefollowerIdsInput";
import { UserUpdatefollowingIdsInput } from "../inputs/UserUpdatefollowingIdsInput";
import { UserUpdateproductIdsInput } from "../inputs/UserUpdateproductIdsInput";
export declare class UserUpdateManyMutationInput {
    uid?: StringFieldUpdateOperationsInput | undefined;
    username?: StringFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    role?: NullableEnumROLEFieldUpdateOperationsInput | undefined;
    firstName?: NullableStringFieldUpdateOperationsInput | undefined;
    lastName?: NullableStringFieldUpdateOperationsInput | undefined;
    avatar?: NullableStringFieldUpdateOperationsInput | undefined;
    coverImage?: NullableStringFieldUpdateOperationsInput | undefined;
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | undefined;
    biography?: NullableStringFieldUpdateOperationsInput | undefined;
    hasAcceptedTerms?: BoolFieldUpdateOperationsInput | undefined;
    isFirstTimeUser?: BoolFieldUpdateOperationsInput | undefined;
    followingIds?: UserUpdatefollowingIdsInput | undefined;
    followerIds?: UserUpdatefollowerIdsInput | undefined;
    productIds?: UserUpdateproductIdsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
