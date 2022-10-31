import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EpisodeListRelationFilter } from "../inputs/EpisodeListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PostListRelationFilter } from "../inputs/PostListRelationFilter";
import { ReactionListRelationFilter } from "../inputs/ReactionListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TopicRelationFilter } from "../inputs/TopicRelationFilter";
export declare class SeasonSeriesWhereInput {
    AND?: SeasonSeriesWhereInput[] | undefined;
    OR?: SeasonSeriesWhereInput[] | undefined;
    NOT?: SeasonSeriesWhereInput[] | undefined;
    id?: StringFilter | undefined;
    seasonOrSeriesNumber?: IntFilter | undefined;
    title?: StringFilter | undefined;
    year?: StringFilter | undefined;
    poster?: StringFilter | undefined;
    overview?: StringFilter | undefined;
    trailer?: StringFilter | undefined;
    coverImage?: StringFilter | undefined;
    tagline?: StringFilter | undefined;
    Topic?: TopicRelationFilter | undefined;
    topicId?: StringFilter | undefined;
    Reactions?: ReactionListRelationFilter | undefined;
    Episodes?: EpisodeListRelationFilter | undefined;
    Posts?: PostListRelationFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
