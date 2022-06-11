import { UserCreatefollowerIdsInput } from "../inputs/UserCreatefollowerIdsInput";
import { UserCreatefollowingIdsInput } from "../inputs/UserCreatefollowingIdsInput";
import { UserCreateproductIdsInput } from "../inputs/UserCreateproductIdsInput";
export declare class UserCreateManyInput {
    uid: string;
    id?: string | undefined;
    username: string;
    email: string;
    roles?: "SUPER_ADMIN" | "ADMIN" | "ARTIST" | "BRAND_MANAGER" | "USER" | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    avatar?: string | undefined;
    coverImage?: string | undefined;
    dateOfBirth: Date;
    hasAcceptedTerms?: boolean | undefined;
    isFirstTimeUser?: boolean | undefined;
    followingIds?: UserCreatefollowingIdsInput | undefined;
    followerIds?: UserCreatefollowerIdsInput | undefined;
    productIds?: UserCreateproductIdsInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
