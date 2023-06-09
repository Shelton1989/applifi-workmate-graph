import { UserCreaterolesInput } from "../inputs/UserCreaterolesInput";
export declare class UserCreateManyInput {
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
    hasAcceptedTerms?: boolean | undefined;
    isFirstTimeUser?: boolean | undefined;
    isVerified?: boolean | undefined;
    isActive?: boolean | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
