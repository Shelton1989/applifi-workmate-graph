import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumSTATUSWithAggregatesFilter } from "../inputs/EnumSTATUSWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class BrandScalarWhereWithAggregatesInput {
    AND?: BrandScalarWhereWithAggregatesInput[] | undefined;
    OR?: BrandScalarWhereWithAggregatesInput[] | undefined;
    NOT?: BrandScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    description?: StringWithAggregatesFilter | undefined;
    tagline?: StringWithAggregatesFilter | undefined;
    status?: EnumSTATUSWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
