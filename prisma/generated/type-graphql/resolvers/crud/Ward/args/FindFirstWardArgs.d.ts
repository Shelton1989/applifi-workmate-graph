import { WardOrderByWithRelationInput } from "../../../inputs/WardOrderByWithRelationInput";
import { WardWhereInput } from "../../../inputs/WardWhereInput";
import { WardWhereUniqueInput } from "../../../inputs/WardWhereUniqueInput";
export declare class FindFirstWardArgs {
    where?: WardWhereInput | undefined;
    orderBy?: WardOrderByWithRelationInput[] | undefined;
    cursor?: WardWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "number" | "name" | "description" | "createdAt" | "updatedAt"> | undefined;
}
