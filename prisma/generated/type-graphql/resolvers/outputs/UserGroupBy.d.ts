import { UserCountAggregate } from "../outputs/UserCountAggregate";
import { UserMaxAggregate } from "../outputs/UserMaxAggregate";
import { UserMinAggregate } from "../outputs/UserMinAggregate";
export declare class UserGroupBy {
    uid: string;
    id: string;
    username: string;
    email: string;
    role: "SUPER_ADMIN" | "ADMIN" | "CRITIC" | "USER" | null;
    firstName: string | null;
    lastName: string | null;
    avatar: string | null;
    coverImage: string | null;
    dateOfBirth: Date;
    biography: string | null;
    hasAcceptedTerms: boolean;
    isFirstTimeUser: boolean;
    isVerified: boolean;
    followingIds: string[] | null;
    followerIds: string[] | null;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregate | null;
    _min: UserMinAggregate | null;
    _max: UserMaxAggregate | null;
}
