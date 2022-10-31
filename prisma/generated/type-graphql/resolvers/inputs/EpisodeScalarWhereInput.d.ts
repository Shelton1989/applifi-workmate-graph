import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class EpisodeScalarWhereInput {
    AND?: EpisodeScalarWhereInput[] | undefined;
    OR?: EpisodeScalarWhereInput[] | undefined;
    NOT?: EpisodeScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    episodeNumber?: IntFilter | undefined;
    title?: StringFilter | undefined;
    year?: StringFilter | undefined;
    poster?: StringFilter | undefined;
    overview?: StringFilter | undefined;
    trailer?: StringFilter | undefined;
    coverImage?: StringFilter | undefined;
    tagline?: StringFilter | undefined;
    seasonSeriesId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
