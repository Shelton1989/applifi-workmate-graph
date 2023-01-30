import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ExperienceRelationFilter } from "../inputs/ExperienceRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class FeaturesWhereInput {
    AND?: FeaturesWhereInput[] | undefined;
    OR?: FeaturesWhereInput[] | undefined;
    NOT?: FeaturesWhereInput[] | undefined;
    id?: StringFilter | undefined;
    Experience?: ExperienceRelationFilter | undefined;
    experienceId?: StringFilter | undefined;
    title?: StringFilter | undefined;
    shortDescription?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
