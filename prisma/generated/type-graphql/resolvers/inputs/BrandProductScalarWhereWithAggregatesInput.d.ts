import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumPRODUCT_CATEGORYWithAggregatesFilter } from "../inputs/EnumPRODUCT_CATEGORYWithAggregatesFilter";
import { EnumPRODUCT_TYPEWithAggregatesFilter } from "../inputs/EnumPRODUCT_TYPEWithAggregatesFilter";
import { EnumSTATUSWithAggregatesFilter } from "../inputs/EnumSTATUSWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class BrandProductScalarWhereWithAggregatesInput {
    AND?: BrandProductScalarWhereWithAggregatesInput[] | undefined;
    OR?: BrandProductScalarWhereWithAggregatesInput[] | undefined;
    NOT?: BrandProductScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    releaseYear?: DateTimeNullableWithAggregatesFilter | undefined;
    description?: StringWithAggregatesFilter | undefined;
    type?: EnumPRODUCT_TYPEWithAggregatesFilter | undefined;
    category?: EnumPRODUCT_CATEGORYWithAggregatesFilter | undefined;
    brandId?: StringWithAggregatesFilter | undefined;
    status?: EnumSTATUSWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
