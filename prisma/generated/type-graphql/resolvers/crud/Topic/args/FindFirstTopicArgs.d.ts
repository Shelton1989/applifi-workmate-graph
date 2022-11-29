import { TopicOrderByWithRelationInput } from "../../../inputs/TopicOrderByWithRelationInput";
import { TopicWhereInput } from "../../../inputs/TopicWhereInput";
import { TopicWhereUniqueInput } from "../../../inputs/TopicWhereUniqueInput";
export declare class FindFirstTopicArgs {
    where?: TopicWhereInput | undefined;
    orderBy?: TopicOrderByWithRelationInput[] | undefined;
    cursor?: TopicWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "title" | "year" | "poster" | "overview" | "trailer" | "coverImage" | "tagline" | "genres" | "creators" | "authors" | "artists" | "producers" | "directors" | "publishers" | "cast" | "type" | "tmdbId" | "releaseDate" | "aggregateRatingId" | "topicType" | "createdAt" | "updatedAt"> | undefined;
}
