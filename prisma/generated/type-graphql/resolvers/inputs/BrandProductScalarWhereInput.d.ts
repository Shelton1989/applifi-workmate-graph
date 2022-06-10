import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EnumPRODUCT_CATEGORYFilter } from "../inputs/EnumPRODUCT_CATEGORYFilter";
import { EnumPRODUCT_TYPEFilter } from "../inputs/EnumPRODUCT_TYPEFilter";
import { EnumSTATUSFilter } from "../inputs/EnumSTATUSFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class BrandProductScalarWhereInput {
    AND?: BrandProductScalarWhereInput[] | undefined;
    OR?: BrandProductScalarWhereInput[] | undefined;
    NOT?: BrandProductScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    releaseYear?: DateTimeNullableFilter | undefined;
    description?: StringFilter | undefined;
    type?: EnumPRODUCT_TYPEFilter | undefined;
    category?: EnumPRODUCT_CATEGORYFilter | undefined;
    brandId?: StringFilter | undefined;
    status?: EnumSTATUSFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
