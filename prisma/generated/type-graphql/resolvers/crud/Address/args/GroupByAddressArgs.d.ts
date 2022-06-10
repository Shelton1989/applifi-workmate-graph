import { AddressOrderByWithAggregationInput } from "../../../inputs/AddressOrderByWithAggregationInput";
import { AddressScalarWhereWithAggregatesInput } from "../../../inputs/AddressScalarWhereWithAggregatesInput";
import { AddressWhereInput } from "../../../inputs/AddressWhereInput";
export declare class GroupByAddressArgs {
    where?: AddressWhereInput | undefined;
    orderBy?: AddressOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "type" | "line1" | "line2" | "city" | "district" | "country" | "code" | "isDefault" | "userId" | "createdAt" | "updatedAt">;
    having?: AddressScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
