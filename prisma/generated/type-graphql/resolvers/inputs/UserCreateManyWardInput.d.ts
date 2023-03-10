import { UserCreatemealIdsInput } from "../inputs/UserCreatemealIdsInput";
import { UserCreaterolesInput } from "../inputs/UserCreaterolesInput";
export declare class UserCreateManyWardInput {
    tenantId?: string | undefined;
    uid: string;
    uuid?: string | undefined;
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
    mealIds?: UserCreatemealIdsInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
