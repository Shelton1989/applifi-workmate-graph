import { UserOrderByWithRelationInput } from "../../../inputs/UserOrderByWithRelationInput";
import { UserWhereInput } from "../../../inputs/UserWhereInput";
import { UserWhereUniqueInput } from "../../../inputs/UserWhereUniqueInput";
export declare class UserFollowingArgs {
    where?: UserWhereInput | undefined;
    orderBy?: UserOrderByWithRelationInput[] | undefined;
    cursor?: UserWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"uid" | "id" | "username" | "email" | "role" | "firstName" | "lastName" | "avatar" | "coverImage" | "dateOfBirth" | "biography" | "hasAcceptedTerms" | "isFirstTimeUser" | "isVerified" | "followingIds" | "followerIds" | "createdAt" | "updatedAt"> | undefined;
}
