import { ArtworkOrderByWithRelationInput } from "../../../inputs/ArtworkOrderByWithRelationInput";
import { ArtworkWhereInput } from "../../../inputs/ArtworkWhereInput";
import { ArtworkWhereUniqueInput } from "../../../inputs/ArtworkWhereUniqueInput";
export declare class FindFirstArtworkArgs {
    where?: ArtworkWhereInput | undefined;
    orderBy?: ArtworkOrderByWithRelationInput[] | undefined;
    cursor?: ArtworkWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "title" | "description" | "caption" | "url" | "productIds" | "inventoryId" | "createdAt" | "updatedAt"> | undefined;
}
