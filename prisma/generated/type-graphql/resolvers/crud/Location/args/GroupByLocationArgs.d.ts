import { LocationOrderByWithAggregationInput } from "../../../inputs/LocationOrderByWithAggregationInput";
import { LocationScalarWhereWithAggregatesInput } from "../../../inputs/LocationScalarWhereWithAggregatesInput";
import { LocationWhereInput } from "../../../inputs/LocationWhereInput";
export declare class GroupByLocationArgs {
    where?: LocationWhereInput | undefined;
    orderBy?: LocationOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "longitude" | "latitude" | "googleMapsUrl" | "googlePlacesId" | "type" | "line1" | "line2" | "city" | "district" | "country" | "code" | "isDefault" | "experienceId" | "tenantId" | "createdAt" | "updatedAt">;
    having?: LocationScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
