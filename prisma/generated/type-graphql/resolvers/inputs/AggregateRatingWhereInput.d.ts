import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EpisodeRelationFilter } from "../inputs/EpisodeRelationFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { SeasonSeriesRelationFilter } from "../inputs/SeasonSeriesRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
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
    topicId?: StringNullableFilter | undefined;
    SeasonSeries?: SeasonSeriesRelationFilter | undefined;
    seasonSeriesId?: StringNullableFilter | undefined;
    Episode?: EpisodeRelationFilter | undefined;
    episodeId?: StringNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
