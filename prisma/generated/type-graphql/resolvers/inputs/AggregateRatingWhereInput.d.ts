import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EpisodeRelationFilter } from "../inputs/EpisodeRelationFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { SeasonSeriesRelationFilter } from "../inputs/SeasonSeriesRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TopicRelationFilter } from "../inputs/TopicRelationFilter";
export declare class AggregateRatingWhereInput {
    AND?: AggregateRatingWhereInput[] | undefined;
    OR?: AggregateRatingWhereInput[] | undefined;
    NOT?: AggregateRatingWhereInput[] | undefined;
    id?: StringFilter | undefined;
    ratingValue?: FloatFilter | undefined;
    countedPosts?: IntNullableFilter | undefined;
    allPosts?: IntNullableFilter | undefined;
    ratingCount?: IntNullableFilter | undefined;
    Topic?: TopicRelationFilter | undefined;
    SeasonSeries?: SeasonSeriesRelationFilter | undefined;
    Episode?: EpisodeRelationFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
