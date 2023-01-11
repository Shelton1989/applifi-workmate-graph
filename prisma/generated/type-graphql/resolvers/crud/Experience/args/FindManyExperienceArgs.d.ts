import { ExperienceOrderByWithRelationInput } from "../../../inputs/ExperienceOrderByWithRelationInput";
import { ExperienceWhereInput } from "../../../inputs/ExperienceWhereInput";
import { ExperienceWhereUniqueInput } from "../../../inputs/ExperienceWhereUniqueInput";
export declare class FindManyExperienceArgs {
    where?: ExperienceWhereInput | undefined;
    orderBy?: ExperienceOrderByWithRelationInput[] | undefined;
    cursor?: ExperienceWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "tenantId" | "productLink" | "stripeProductId" | "title" | "description" | "category" | "photo" | "gallery" | "location" | "duration" | "publishStatus" | "likedByIds" | "createdAt" | "updatedAt"> | undefined;
}
