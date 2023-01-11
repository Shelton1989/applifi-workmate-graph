import { UserOrderByWithRelationInput } from "../../../inputs/UserOrderByWithRelationInput";
import { UserWhereInput } from "../../../inputs/UserWhereInput";
import { UserWhereUniqueInput } from "../../../inputs/UserWhereUniqueInput";
export declare class FindManyUserArgs {
    where?: UserWhereInput | undefined;
    orderBy?: UserOrderByWithRelationInput[] | undefined;
    cursor?: UserWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"tenantId" | "uid" | "uuid" | "id" | "username" | "email" | "roles" | "firstName" | "lastName" | "avatar" | "coverImage" | "dateOfBirth" | "biography" | "hasAcceptedTerms" | "isFirstTimeUser" | "isVerified" | "followingIds" | "followerIds" | "experienceIds" | "createdAt" | "updatedAt"> | undefined;
}
