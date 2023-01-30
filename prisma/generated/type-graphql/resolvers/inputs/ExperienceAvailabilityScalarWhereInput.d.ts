import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EnumAVAILABILITY_TYPEFilter } from "../inputs/EnumAVAILABILITY_TYPEFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class ExperienceAvailabilityScalarWhereInput {
    AND?: ExperienceAvailabilityScalarWhereInput[] | undefined;
    OR?: ExperienceAvailabilityScalarWhereInput[] | undefined;
    NOT?: ExperienceAvailabilityScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
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
