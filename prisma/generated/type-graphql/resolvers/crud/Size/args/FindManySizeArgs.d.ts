import { SizeOrderByWithRelationInput } from "../../../inputs/SizeOrderByWithRelationInput";
import { SizeWhereInput } from "../../../inputs/SizeWhereInput";
import { SizeWhereUniqueInput } from "../../../inputs/SizeWhereUniqueInput";
export declare class FindManySizeArgs {
    where?: SizeWhereInput | undefined;
    orderBy?: SizeOrderByWithRelationInput[] | undefined;
    cursor?: SizeWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "value" | "region" | "productIds" | "createdAt" | "updatedAt"> | undefined;
}
