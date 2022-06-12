import { UserCountAggregate } from "../outputs/UserCountAggregate";
import { UserMaxAggregate } from "../outputs/UserMaxAggregate";
import { UserMinAggregate } from "../outputs/UserMinAggregate";
export declare class UserGroupBy {
    uid: string;
    id: string;
    username: string;
    email: string;
    role: "SUPER_ADMIN" | "ADMIN" | "ARTIST" | "BRAND_MANAGER" | "USER";
    firstName: string | null;
    lastName: string | null;
    avatar: string | null;
    coverImage: string | null;
    dateOfBirth: Date;
    hasAcceptedTerms: boolean;
    isFirstTimeUser: boolean;
    followingIds: string[] | null;
    followerIds: string[] | null;
    productIds: string[] | null;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregate | null;
    _min: UserMinAggregate | null;
    _max: UserMaxAggregate | null;
}
