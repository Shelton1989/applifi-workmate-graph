import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class FeaturesScalarWhereWithAggregatesInput {
    AND?: FeaturesScalarWhereWithAggregatesInput[] | undefined;
    OR?: FeaturesScalarWhereWithAggregatesInput[] | undefined;
    NOT?: FeaturesScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    experienceId?: StringWithAggregatesFilter | undefined;
    title?: StringWithAggregatesFilter | undefined;
    shortDescription?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
