import { UserCountAggregate } from "../outputs/UserCountAggregate";
import { UserMaxAggregate } from "../outputs/UserMaxAggregate";
import { UserMinAggregate } from "../outputs/UserMinAggregate";
export declare class UserGroupBy {
    tenantId: string | null;
    uid: string;
    uuid: string | null;
    id: string;
    username: string;
    email: string;
    roles: Array<"SUPER_ADMIN" | "ADMIN" | "USER" | "WORKSPACE_OWNER" | "WORKSPACE_ADMIN" | "WORKSPACE_USER"> | null;
    firstName: string | null;
    lastName: string | null;
    avatar: string | null;
    coverImage: string | null;
    dateOfBirth: Date | null;
    biography: string | null;
    hasAcceptedTerms: boolean | null;
    isFirstTimeUser: boolean | null;
    isVerified: boolean | null;
    followingIds: string[] | null;
    followerIds: string[] | null;
    experienceIds: string[] | null;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregate | null;
    _min: UserMinAggregate | null;
    _max: UserMaxAggregate | null;
}
