import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ExperienceRelationFilter } from "../inputs/ExperienceRelationFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class AggregateRatingWhereInput {
    AND?: AggregateRatingWhereInput[] | undefined;
    OR?: AggregateRatingWhereInput[] | undefined;
    NOT?: AggregateRatingWhereInput[] | undefined;
    id?: StringFilter | undefined;
    ratingValue?: FloatFilter | undefined;
    countedPosts?: IntNullableFilter | undefined;
    allPosts?: IntNullableFilter | undefined;
    ratingCount?: IntNullableFilter | undefined;
    Experience?: ExperienceRelationFilter | undefined;
    experienceId?: StringNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
