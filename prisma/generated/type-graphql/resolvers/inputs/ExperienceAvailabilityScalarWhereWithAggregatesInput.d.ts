import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumAVAILABILITY_TYPEWithAggregatesFilter } from "../inputs/EnumAVAILABILITY_TYPEWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ExperienceAvailabilityScalarWhereWithAggregatesInput {
    AND?: ExperienceAvailabilityScalarWhereWithAggregatesInput[] | undefined;
    OR?: ExperienceAvailabilityScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ExperienceAvailabilityScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    experienceId?: StringWithAggregatesFilter | undefined;
    startDate?: DateTimeNullableWithAggregatesFilter | undefined;
    endDate?: DateTimeNullableWithAggregatesFilter | undefined;
    availabilityType?: EnumAVAILABILITY_TYPEWithAggregatesFilter | undefined;
    spacesAvailable?: IntWithAggregatesFilter | undefined;
    spacesBooked?: IntWithAggregatesFilter | undefined;
    datesAreFlexible?: BoolWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
