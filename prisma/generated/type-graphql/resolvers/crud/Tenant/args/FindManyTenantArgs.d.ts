import { TenantOrderByWithRelationInput } from "../../../inputs/TenantOrderByWithRelationInput";
import { TenantWhereInput } from "../../../inputs/TenantWhereInput";
import { TenantWhereUniqueInput } from "../../../inputs/TenantWhereUniqueInput";
export declare class FindManyTenantArgs {
    where?: TenantWhereInput | undefined;
    orderBy?: TenantOrderByWithRelationInput[] | undefined;
    cursor?: TenantWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "slug" | "description" | "avatar" | "coverImage" | "experienceImages" | "createdAt" | "updatedAt"> | undefined;
}
