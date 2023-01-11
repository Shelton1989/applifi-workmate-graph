import { CurrencyOrderByWithRelationInput } from "../../../inputs/CurrencyOrderByWithRelationInput";
import { CurrencyWhereInput } from "../../../inputs/CurrencyWhereInput";
import { CurrencyWhereUniqueInput } from "../../../inputs/CurrencyWhereUniqueInput";
export declare class FindManyCurrencyArgs {
    where?: CurrencyWhereInput | undefined;
    orderBy?: CurrencyOrderByWithRelationInput[] | undefined;
    cursor?: CurrencyWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "symbol" | "code" | "createdAt" | "updatedAt"> | undefined;
}
