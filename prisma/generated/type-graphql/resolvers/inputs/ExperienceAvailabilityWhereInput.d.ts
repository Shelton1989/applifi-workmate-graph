import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
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
    startDate?: DateTimeNullableFilter | undefined;
    endDate?: DateTimeNullableFilter | undefined;
    availabilityType?: EnumAVAILABILITY_TYPEFilter | undefined;
    spacesAvailable?: IntFilter | undefined;
    spacesBooked?: IntFilter | undefined;
    datesAreFlexible?: BoolFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
