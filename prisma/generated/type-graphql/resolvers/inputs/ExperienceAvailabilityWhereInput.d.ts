import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumAVAILABILITY_TYPEFilter } from "../inputs/EnumAVAILABILITY_TYPEFilter";
import { ExperienceRelationFilter } from "../inputs/ExperienceRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class ExperienceAvailabilityWhereInput {
    AND?: ExperienceAvailabilityWhereInput[] | undefined;
    OR?: ExperienceAvailabilityWhereInput[] | undefined;
    NOT?: ExperienceAvailabilityWhereInput[] | undefined;
    id?: StringFilter | undefined;
    Experience?: ExperienceRelationFilter | undefined;
    experienceId?: StringFilter | undefined;
    startDate?: DateTimeFilter | undefined;
    endDate?: DateTimeFilter | undefined;
    availabilityType?: EnumAVAILABILITY_TYPEFilter | undefined;
    weekendSpacesAvailable?: IntFilter | undefined;
    dailySpacesAvailable?: IntFilter | undefined;
    hourlySpacesAvailable?: IntFilter | undefined;
    halfHourlySpacesAvailable?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
