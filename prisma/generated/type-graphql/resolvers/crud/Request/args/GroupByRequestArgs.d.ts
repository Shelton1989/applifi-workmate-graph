import { RequestOrderByWithAggregationInput } from "../../../inputs/RequestOrderByWithAggregationInput";
import { RequestScalarWhereWithAggregatesInput } from "../../../inputs/RequestScalarWhereWithAggregatesInput";
import { RequestWhereInput } from "../../../inputs/RequestWhereInput";
export declare class GroupByRequestArgs {
    where?: RequestWhereInput | undefined;
    orderBy?: RequestOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "subject" | "message" | "type" | "socialLinks" | "entityId" | "requestResolution" | "userId" | "createdAt" | "updatedAt">;
    having?: RequestScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
