import { BrandOrderByWithRelationInput } from "../../../inputs/BrandOrderByWithRelationInput";
import { BrandWhereInput } from "../../../inputs/BrandWhereInput";
import { BrandWhereUniqueInput } from "../../../inputs/BrandWhereUniqueInput";
export declare class FindFirstBrandArgs {
    where?: BrandWhereInput | undefined;
    orderBy?: BrandOrderByWithRelationInput[] | undefined;
    cursor?: BrandWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "description" | "tagline" | "status" | "createdAt" | "updatedAt"> | undefined;
}
