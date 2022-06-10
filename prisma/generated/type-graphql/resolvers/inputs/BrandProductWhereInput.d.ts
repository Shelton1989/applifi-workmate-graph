import { BrandRelationFilter } from "../inputs/BrandRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EnumPRODUCT_CATEGORYFilter } from "../inputs/EnumPRODUCT_CATEGORYFilter";
import { EnumPRODUCT_TYPEFilter } from "../inputs/EnumPRODUCT_TYPEFilter";
import { EnumSTATUSFilter } from "../inputs/EnumSTATUSFilter";
import { ProductListRelationFilter } from "../inputs/ProductListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class BrandProductWhereInput {
    AND?: BrandProductWhereInput[] | undefined;
    OR?: BrandProductWhereInput[] | undefined;
    NOT?: BrandProductWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    releaseYear?: DateTimeNullableFilter | undefined;
    description?: StringFilter | undefined;
    type?: EnumPRODUCT_TYPEFilter | undefined;
    category?: EnumPRODUCT_CATEGORYFilter | undefined;
    brand?: BrandRelationFilter | undefined;
    brandId?: StringFilter | undefined;
    status?: EnumSTATUSFilter | undefined;
    Products?: ProductListRelationFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
