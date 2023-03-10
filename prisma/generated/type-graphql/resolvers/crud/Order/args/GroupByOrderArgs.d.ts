import { OrderOrderByWithAggregationInput } from "../../../inputs/OrderOrderByWithAggregationInput";
import { OrderScalarWhereWithAggregatesInput } from "../../../inputs/OrderScalarWhereWithAggregatesInput";
import { OrderWhereInput } from "../../../inputs/OrderWhereInput";
export declare class GroupByOrderArgs {
    where?: OrderWhereInput | undefined;
    orderBy?: OrderOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "mealId" | "status" | "patientId" | "tenantId" | "createdAt" | "updatedAt">;
    having?: OrderScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
