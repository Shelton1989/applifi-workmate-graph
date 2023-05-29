import { UserOrderByWithRelationInput } from "../../../inputs/UserOrderByWithRelationInput";
import { UserWhereInput } from "../../../inputs/UserWhereInput";
import { UserWhereUniqueInput } from "../../../inputs/UserWhereUniqueInput";
export declare class FindFirstUserArgs {
    where?: UserWhereInput | undefined;
    orderBy?: UserOrderByWithRelationInput[] | undefined;
    cursor?: UserWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"tenantId" | "uid" | "uuid" | "id" | "username" | "email" | "roles" | "firstName" | "lastName" | "avatar" | "hasAcceptedTerms" | "isFirstTimeUser" | "isVerified" | "isActive" | "createdAt" | "updatedAt"> | undefined;
}
