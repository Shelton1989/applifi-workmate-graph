import { AddressUpdateManyWithoutUserInput } from "../inputs/AddressUpdateManyWithoutUserInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { InventoryUpdateOneWithoutUserInput } from "../inputs/InventoryUpdateOneWithoutUserInput";
import { NotificationSettingsUpdateOneWithoutUserInput } from "../inputs/NotificationSettingsUpdateOneWithoutUserInput";
import { NotificationUpdateManyWithoutActorInput } from "../inputs/NotificationUpdateManyWithoutActorInput";
import { NotificationUpdateManyWithoutUserInput } from "../inputs/NotificationUpdateManyWithoutUserInput";
import { NullableEnumROLEFieldUpdateOperationsInput } from "../inputs/NullableEnumROLEFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OrderUpdateManyWithoutBuyerInput } from "../inputs/OrderUpdateManyWithoutBuyerInput";
import { OrderUpdateManyWithoutSellerInput } from "../inputs/OrderUpdateManyWithoutSellerInput";
import { PostUpdateManyWithoutAuthorInput } from "../inputs/PostUpdateManyWithoutAuthorInput";
import { ProductUpdateManyWithoutLikedByInput } from "../inputs/ProductUpdateManyWithoutLikedByInput";
import { ReactionUpdateManyWithoutAuthorInput } from "../inputs/ReactionUpdateManyWithoutAuthorInput";
import { ReplyUpdateManyWithoutAuthorInput } from "../inputs/ReplyUpdateManyWithoutAuthorInput";
import { RequestUpdateManyWithoutReporterInput } from "../inputs/RequestUpdateManyWithoutReporterInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateManyWithoutFollowersInput } from "../inputs/UserUpdateManyWithoutFollowersInput";
import { UserUpdateManyWithoutFollowingInput } from "../inputs/UserUpdateManyWithoutFollowingInput";
import { UserUpdatefollowerIdsInput } from "../inputs/UserUpdatefollowerIdsInput";
import { UserUpdatefollowingIdsInput } from "../inputs/UserUpdatefollowingIdsInput";
import { UserUpdateproductIdsInput } from "../inputs/UserUpdateproductIdsInput";
export declare class UserUpdateWithoutCommentsInput {
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
    Addresses?: AddressUpdateManyWithoutUserInput | undefined;
    NotificationSettings?: NotificationSettingsUpdateOneWithoutUserInput | undefined;
    Notifications?: NotificationUpdateManyWithoutUserInput | undefined;
    Activity?: NotificationUpdateManyWithoutActorInput | undefined;
    Following?: UserUpdateManyWithoutFollowersInput | undefined;
    followingIds?: UserUpdatefollowingIdsInput | undefined;
    Followers?: UserUpdateManyWithoutFollowingInput | undefined;
    followerIds?: UserUpdatefollowerIdsInput | undefined;
    LikedProducts?: ProductUpdateManyWithoutLikedByInput | undefined;
    productIds?: UserUpdateproductIdsInput | undefined;
    Inventory?: InventoryUpdateOneWithoutUserInput | undefined;
    MyOrders?: OrderUpdateManyWithoutBuyerInput | undefined;
    PurchaseOrders?: OrderUpdateManyWithoutSellerInput | undefined;
    Requests?: RequestUpdateManyWithoutReporterInput | undefined;
    Posts?: PostUpdateManyWithoutAuthorInput | undefined;
    Replies?: ReplyUpdateManyWithoutAuthorInput | undefined;
    Reactions?: ReactionUpdateManyWithoutAuthorInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
