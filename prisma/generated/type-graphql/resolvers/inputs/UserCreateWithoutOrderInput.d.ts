import { AddressCreateNestedManyWithoutUserInput } from "../inputs/AddressCreateNestedManyWithoutUserInput";
import { CommentCreateNestedManyWithoutAuthorInput } from "../inputs/CommentCreateNestedManyWithoutAuthorInput";
import { InventoryCreateNestedOneWithoutUserInput } from "../inputs/InventoryCreateNestedOneWithoutUserInput";
import { NotificationSettingsCreateNestedOneWithoutUserInput } from "../inputs/NotificationSettingsCreateNestedOneWithoutUserInput";
import { PostCreateNestedManyWithoutAuthorInput } from "../inputs/PostCreateNestedManyWithoutAuthorInput";
import { ProductCreateNestedManyWithoutLikedByInput } from "../inputs/ProductCreateNestedManyWithoutLikedByInput";
import { ReactionCreateNestedManyWithoutAuthorInput } from "../inputs/ReactionCreateNestedManyWithoutAuthorInput";
import { ReplyCreateNestedManyWithoutAuthorInput } from "../inputs/ReplyCreateNestedManyWithoutAuthorInput";
import { UserCreateNestedManyWithoutFollowersInput } from "../inputs/UserCreateNestedManyWithoutFollowersInput";
import { UserCreateNestedManyWithoutFollowingInput } from "../inputs/UserCreateNestedManyWithoutFollowingInput";
import { UserCreatefollowerIdsInput } from "../inputs/UserCreatefollowerIdsInput";
import { UserCreatefollowingIdsInput } from "../inputs/UserCreatefollowingIdsInput";
import { UserCreateproductIdsInput } from "../inputs/UserCreateproductIdsInput";
import { UserCreaterolesInput } from "../inputs/UserCreaterolesInput";
export declare class UserCreateWithoutOrderInput {
    uid: string;
    id?: string | undefined;
    username: string;
    email: string;
    roles?: UserCreaterolesInput | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    avatar?: string | undefined;
    coverImage?: string | undefined;
    dateOfBirth: Date;
    hasAcceptedTerms?: boolean | undefined;
    isFirstTimeUser?: boolean | undefined;
    Addresses?: AddressCreateNestedManyWithoutUserInput | undefined;
    NotificationSettings?: NotificationSettingsCreateNestedOneWithoutUserInput | undefined;
    Following?: UserCreateNestedManyWithoutFollowersInput | undefined;
    followingIds?: UserCreatefollowingIdsInput | undefined;
    Followers?: UserCreateNestedManyWithoutFollowingInput | undefined;
    followerIds?: UserCreatefollowerIdsInput | undefined;
    LikedProducts?: ProductCreateNestedManyWithoutLikedByInput | undefined;
    productIds?: UserCreateproductIdsInput | undefined;
    Inventory?: InventoryCreateNestedOneWithoutUserInput | undefined;
    Posts?: PostCreateNestedManyWithoutAuthorInput | undefined;
    Comments?: CommentCreateNestedManyWithoutAuthorInput | undefined;
    Replies?: ReplyCreateNestedManyWithoutAuthorInput | undefined;
    Reactions?: ReactionCreateNestedManyWithoutAuthorInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
