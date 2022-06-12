import { AddressUpdateManyWithoutUserInput } from "../inputs/AddressUpdateManyWithoutUserInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CommentUpdateManyWithoutAuthorInput } from "../inputs/CommentUpdateManyWithoutAuthorInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { InventoryUpdateOneWithoutUserInput } from "../inputs/InventoryUpdateOneWithoutUserInput";
import { NotificationSettingsUpdateOneWithoutUserInput } from "../inputs/NotificationSettingsUpdateOneWithoutUserInput";
import { NullableEnumROLEFieldUpdateOperationsInput } from "../inputs/NullableEnumROLEFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OrderUpdateOneWithoutUserInput } from "../inputs/OrderUpdateOneWithoutUserInput";
import { ProductUpdateManyWithoutLikedByInput } from "../inputs/ProductUpdateManyWithoutLikedByInput";
import { ReactionUpdateManyWithoutAuthorInput } from "../inputs/ReactionUpdateManyWithoutAuthorInput";
import { ReplyUpdateManyWithoutAuthorInput } from "../inputs/ReplyUpdateManyWithoutAuthorInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateManyWithoutFollowersInput } from "../inputs/UserUpdateManyWithoutFollowersInput";
import { UserUpdateManyWithoutFollowingInput } from "../inputs/UserUpdateManyWithoutFollowingInput";
import { UserUpdatefollowerIdsInput } from "../inputs/UserUpdatefollowerIdsInput";
import { UserUpdatefollowingIdsInput } from "../inputs/UserUpdatefollowingIdsInput";
import { UserUpdateproductIdsInput } from "../inputs/UserUpdateproductIdsInput";
export declare class UserUpdateWithoutPostsInput {
    uid?: StringFieldUpdateOperationsInput | undefined;
    username?: StringFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    role?: NullableEnumROLEFieldUpdateOperationsInput | undefined;
    firstName?: NullableStringFieldUpdateOperationsInput | undefined;
    lastName?: NullableStringFieldUpdateOperationsInput | undefined;
    avatar?: NullableStringFieldUpdateOperationsInput | undefined;
    coverImage?: NullableStringFieldUpdateOperationsInput | undefined;
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | undefined;
    hasAcceptedTerms?: BoolFieldUpdateOperationsInput | undefined;
    isFirstTimeUser?: BoolFieldUpdateOperationsInput | undefined;
    Addresses?: AddressUpdateManyWithoutUserInput | undefined;
    NotificationSettings?: NotificationSettingsUpdateOneWithoutUserInput | undefined;
    Following?: UserUpdateManyWithoutFollowersInput | undefined;
    followingIds?: UserUpdatefollowingIdsInput | undefined;
    Followers?: UserUpdateManyWithoutFollowingInput | undefined;
    followerIds?: UserUpdatefollowerIdsInput | undefined;
    Order?: OrderUpdateOneWithoutUserInput | undefined;
    LikedProducts?: ProductUpdateManyWithoutLikedByInput | undefined;
    productIds?: UserUpdateproductIdsInput | undefined;
    Inventory?: InventoryUpdateOneWithoutUserInput | undefined;
    Comments?: CommentUpdateManyWithoutAuthorInput | undefined;
    Replies?: ReplyUpdateManyWithoutAuthorInput | undefined;
    Reactions?: ReactionUpdateManyWithoutAuthorInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
