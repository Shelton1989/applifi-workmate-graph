import { BrandProductOrderByWithRelationInput } from "../../../inputs/BrandProductOrderByWithRelationInput";
import { BrandProductWhereInput } from "../../../inputs/BrandProductWhereInput";
import { BrandProductWhereUniqueInput } from "../../../inputs/BrandProductWhereUniqueInput";
export declare class FindManyBrandProductArgs {
    where?: BrandProductWhereInput | undefined;
    orderBy?: BrandProductOrderByWithRelationInput[] | undefined;
    cursor?: BrandProductWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "releaseYear" | "description" | "type" | "category" | "brandId" | "status" | "createdAt" | "updatedAt"> | undefined;
}
