import { FeaturesOrderByWithRelationInput } from "../../../inputs/FeaturesOrderByWithRelationInput";
import { FeaturesWhereInput } from "../../../inputs/FeaturesWhereInput";
import { FeaturesWhereUniqueInput } from "../../../inputs/FeaturesWhereUniqueInput";
export declare class FindFirstFeaturesArgs {
    where?: FeaturesWhereInput | undefined;
    orderBy?: FeaturesOrderByWithRelationInput[] | undefined;
    cursor?: FeaturesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "experienceId" | "title" | "shortDescription" | "createdAt" | "updatedAt"> | undefined;
}