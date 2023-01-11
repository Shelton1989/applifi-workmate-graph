import { UserCreateexperienceIdsInput } from "../inputs/UserCreateexperienceIdsInput";
import { UserCreatefollowerIdsInput } from "../inputs/UserCreatefollowerIdsInput";
import { UserCreatefollowingIdsInput } from "../inputs/UserCreatefollowingIdsInput";
import { UserCreaterolesInput } from "../inputs/UserCreaterolesInput";
export declare class UserCreateManyInput {
    tenantId?: string | undefined;
    uid: string;
    uuid: string;
    id?: string | undefined;
    username: string;
    email: string;
    roles?: UserCreaterolesInput | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    avatar?: string | undefined;
    coverImage?: string | undefined;
    dateOfBirth?: Date | undefined;
    biography?: string | undefined;
    hasAcceptedTerms?: boolean | undefined;
    isFirstTimeUser?: boolean | undefined;
    isVerified?: boolean | undefined;
    followingIds?: UserCreatefollowingIdsInput | undefined;
    followerIds?: UserCreatefollowerIdsInput | undefined;
    experienceIds?: UserCreateexperienceIdsInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
