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
    startDate?: DateTimeWithAggregatesFilter | undefined;
    endDate?: DateTimeWithAggregatesFilter | undefined;
    availabilityType?: EnumAVAILABILITY_TYPEWithAggregatesFilter | undefined;
    weekendSpacesAvailable?: IntWithAggregatesFilter | undefined;
    dailySpacesAvailable?: IntWithAggregatesFilter | undefined;
    hourlySpacesAvailable?: IntWithAggregatesFilter | undefined;
    halfHourlySpacesAvailable?: IntWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
