import { ProductKeyOrderByWithRelationInput } from "../../../inputs/ProductKeyOrderByWithRelationInput";
import { ProductKeyWhereInput } from "../../../inputs/ProductKeyWhereInput";
import { ProductKeyWhereUniqueInput } from "../../../inputs/ProductKeyWhereUniqueInput";
export declare class FindFirstProductKeyArgs {
    where?: ProductKeyWhereInput | undefined;
    orderBy?: ProductKeyOrderByWithRelationInput[] | undefined;
    cursor?: ProductKeyWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "billingId" | "createdBy" | "key" | "createdAt" | "updatedAt"> | undefined;
}
