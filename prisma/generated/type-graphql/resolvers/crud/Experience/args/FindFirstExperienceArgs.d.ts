import { ExperienceOrderByWithRelationInput } from "../../../inputs/ExperienceOrderByWithRelationInput";
import { ExperienceWhereInput } from "../../../inputs/ExperienceWhereInput";
import { ExperienceWhereUniqueInput } from "../../../inputs/ExperienceWhereUniqueInput";
export declare class FindFirstExperienceArgs {
    where?: ExperienceWhereInput | undefined;
    orderBy?: ExperienceOrderByWithRelationInput[] | undefined;
    cursor?: ExperienceWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "tenantId" | "productLink" | "stripeProductId" | "title" | "description" | "category" | "photo" | "gallery" | "duration" | "publishStatus" | "likedByIds" | "createdAt" | "updatedAt"> | undefined;
}