import { AddressCreateNestedManyWithoutUserInput } from "../inputs/AddressCreateNestedManyWithoutUserInput";
import { CommentCreateNestedManyWithoutAuthorInput } from "../inputs/CommentCreateNestedManyWithoutAuthorInput";
import { InventoryCreateNestedOneWithoutUserInput } from "../inputs/InventoryCreateNestedOneWithoutUserInput";
import { NotificationCreateNestedManyWithoutActorInput } from "../inputs/NotificationCreateNestedManyWithoutActorInput";
import { NotificationCreateNestedManyWithoutUserInput } from "../inputs/NotificationCreateNestedManyWithoutUserInput";
import { NotificationSettingsCreateNestedOneWithoutUserInput } from "../inputs/NotificationSettingsCreateNestedOneWithoutUserInput";
import { OrderCreateNestedManyWithoutBuyerInput } from "../inputs/OrderCreateNestedManyWithoutBuyerInput";
import { OrderCreateNestedManyWithoutSellerInput } from "../inputs/OrderCreateNestedManyWithoutSellerInput";
import { PostCreateNestedManyWithoutAuthorInput } from "../inputs/PostCreateNestedManyWithoutAuthorInput";
import { ProductCreateNestedManyWithoutLikedByInput } from "../inputs/ProductCreateNestedManyWithoutLikedByInput";
import { ReactionCreateNestedManyWithoutAuthorInput } from "../inputs/ReactionCreateNestedManyWithoutAuthorInput";
import { ReplyCreateNestedManyWithoutAuthorInput } from "../inputs/ReplyCreateNestedManyWithoutAuthorInput";
import { UserCreateNestedManyWithoutFollowersInput } from "../inputs/UserCreateNestedManyWithoutFollowersInput";
import { UserCreateNestedManyWithoutFollowingInput } from "../inputs/UserCreateNestedManyWithoutFollowingInput";
import { UserCreatefollowerIdsInput } from "../inputs/UserCreatefollowerIdsInput";
import { UserCreatefollowingIdsInput } from "../inputs/UserCreatefollowingIdsInput";
import { UserCreateproductIdsInput } from "../inputs/UserCreateproductIdsInput";
export declare class UserCreateWithoutRequestsInput {
    uid: string;
    id?: string | undefined;
    username: string;
    email: string;
    role?: "SUPER_ADMIN" | "ADMIN" | "ARTIST" | "BRAND_MANAGER" | "USER" | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    avatar?: string | undefined;
    coverImage?: string | undefined;
    dateOfBirth: Date;
    biography?: string | undefined;
    hasAcceptedTerms?: boolean | undefined;
    isFirstTimeUser?: boolean | undefined;
    Addresses?: AddressCreateNestedManyWithoutUserInput | undefined;
    NotificationSettings?: NotificationSettingsCreateNestedOneWithoutUserInput | undefined;
    Notifications?: NotificationCreateNestedManyWithoutUserInput | undefined;
    Activity?: NotificationCreateNestedManyWithoutActorInput | undefined;
    Following?: UserCreateNestedManyWithoutFollowersInput | undefined;
    followingIds?: UserCreatefollowingIdsInput | undefined;
    Followers?: UserCreateNestedManyWithoutFollowingInput | undefined;
    followerIds?: UserCreatefollowerIdsInput | undefined;
    LikedProducts?: ProductCreateNestedManyWithoutLikedByInput | undefined;
    productIds?: UserCreateproductIdsInput | undefined;
    Inventory?: InventoryCreateNestedOneWithoutUserInput | undefined;
    MyOrders?: OrderCreateNestedManyWithoutBuyerInput | undefined;
    PurchaseOrders?: OrderCreateNestedManyWithoutSellerInput | undefined;
    Posts?: PostCreateNestedManyWithoutAuthorInput | undefined;
    Comments?: CommentCreateNestedManyWithoutAuthorInput | undefined;
    Replies?: ReplyCreateNestedManyWithoutAuthorInput | undefined;
    Reactions?: ReactionCreateNestedManyWithoutAuthorInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
