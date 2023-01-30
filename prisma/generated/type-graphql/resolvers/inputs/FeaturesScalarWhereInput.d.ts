import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class FeaturesScalarWhereInput {
    AND?: FeaturesScalarWhereInput[] | undefined;
    OR?: FeaturesScalarWhereInput[] | undefined;
    NOT?: FeaturesScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    experienceId?: StringFilter | undefined;
    title?: StringFilter | undefined;
    shortDescription?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
