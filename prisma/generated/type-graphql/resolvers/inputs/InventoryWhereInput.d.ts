import { ArtworkListRelationFilter } from "../inputs/ArtworkListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ProductListRelationFilter } from "../inputs/ProductListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class InventoryWhereInput {
    AND?: InventoryWhereInput[] | undefined;
    OR?: InventoryWhereInput[] | undefined;
    NOT?: InventoryWhereInput[] | undefined;
    id?: StringFilter | undefined;
    Products?: ProductListRelationFilter | undefined;
    Artwork?: ArtworkListRelationFilter | undefined;
    User?: UserRelationFilter | undefined;
    userId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
