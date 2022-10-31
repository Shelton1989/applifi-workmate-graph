import { UserCreatefollowerIdsInput } from "../inputs/UserCreatefollowerIdsInput";
import { UserCreatefollowingIdsInput } from "../inputs/UserCreatefollowingIdsInput";
export declare class UserCreateManyInput {
    uid: string;
    id?: string | undefined;
    username: string;
    email: string;
    role?: "SUPER_ADMIN" | "ADMIN" | "CRITIC" | "USER" | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    avatar?: string | undefined;
    coverImage?: string | undefined;
    dateOfBirth: Date;
    biography?: string | undefined;
    hasAcceptedTerms?: boolean | undefined;
    isFirstTimeUser?: boolean | undefined;
    isVerified?: boolean | undefined;
    followingIds?: UserCreatefollowingIdsInput | undefined;
    followerIds?: UserCreatefollowerIdsInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
