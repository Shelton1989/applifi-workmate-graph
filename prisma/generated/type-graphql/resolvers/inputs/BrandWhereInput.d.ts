import { BrandProductListRelationFilter } from "../inputs/BrandProductListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumSTATUSFilter } from "../inputs/EnumSTATUSFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class BrandWhereInput {
    AND?: BrandWhereInput[] | undefined;
    OR?: BrandWhereInput[] | undefined;
    NOT?: BrandWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    description?: StringFilter | undefined;
    tagline?: StringFilter | undefined;
    BrandProducts?: BrandProductListRelationFilter | undefined;
    status?: EnumSTATUSFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
