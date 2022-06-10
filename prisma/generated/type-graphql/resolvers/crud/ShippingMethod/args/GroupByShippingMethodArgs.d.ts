import { ShippingMethodOrderByWithAggregationInput } from "../../../inputs/ShippingMethodOrderByWithAggregationInput";
import { ShippingMethodScalarWhereWithAggregatesInput } from "../../../inputs/ShippingMethodScalarWhereWithAggregatesInput";
import { ShippingMethodWhereInput } from "../../../inputs/ShippingMethodWhereInput";
export declare class GroupByShippingMethodArgs {
    where?: ShippingMethodWhereInput | undefined;
    orderBy?: ShippingMethodOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "description" | "label" | "arrivalTimeInBusinessDays" | "arrivalTimeInBusinessDaysRang" | "arrivalTimeDescription" | "priceId" | "createdAt" | "updatedAt">;
    having?: ShippingMethodScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
