import { AggregateRatingRelationFilter } from "../inputs/AggregateRatingRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PostListRelationFilter } from "../inputs/PostListRelationFilter";
import { ReactionListRelationFilter } from "../inputs/ReactionListRelationFilter";
import { SeasonSeriesRelationFilter } from "../inputs/SeasonSeriesRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class EpisodeWhereInput {
    AND?: EpisodeWhereInput[] | undefined;
    OR?: EpisodeWhereInput[] | undefined;
    NOT?: EpisodeWhereInput[] | undefined;
    id?: StringFilter | undefined;
    episodeNumber?: IntFilter | undefined;
    title?: StringFilter | undefined;
    year?: StringFilter | undefined;
    poster?: StringFilter | undefined;
    overview?: StringFilter | undefined;
    trailer?: StringFilter | undefined;
    coverImage?: StringFilter | undefined;
    tagline?: StringFilter | undefined;
    releaseDate?: DateTimeFilter | undefined;
    SeasonSeries?: SeasonSeriesRelationFilter | undefined;
    seasonSeriesId?: StringFilter | undefined;
    AggregateRating?: AggregateRatingRelationFilter | undefined;
    Reactions?: ReactionListRelationFilter | undefined;
    Posts?: PostListRelationFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
