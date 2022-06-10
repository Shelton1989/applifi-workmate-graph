import { ArtworkOrderByWithAggregationInput } from "../../../inputs/ArtworkOrderByWithAggregationInput";
import { ArtworkScalarWhereWithAggregatesInput } from "../../../inputs/ArtworkScalarWhereWithAggregatesInput";
import { ArtworkWhereInput } from "../../../inputs/ArtworkWhereInput";
export declare class GroupByArtworkArgs {
    where?: ArtworkWhereInput | undefined;
    orderBy?: ArtworkOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "title" | "description" | "caption" | "url" | "productIds" | "inventoryId" | "createdAt" | "updatedAt">;
    having?: ArtworkScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
