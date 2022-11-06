import { AggregateRating } from "../../../models/AggregateRating";
import { Post } from "../../../models/Post";
import { Reaction } from "../../../models/Reaction";
import { SeasonSeries } from "../../../models/SeasonSeries";
import { Topic } from "../../../models/Topic";
import { TopicPostsArgs } from "./args/TopicPostsArgs";
import { TopicReactionsArgs } from "./args/TopicReactionsArgs";
import { TopicSeasonSeriesArgs } from "./args/TopicSeasonSeriesArgs";
export declare class TopicRelationsResolver {
    AggregateRating(topic: Topic, ctx: any): Promise<AggregateRating | null>;
    Reactions(topic: Topic, ctx: any, args: TopicReactionsArgs): Promise<Reaction[]>;
    SeasonSeries(topic: Topic, ctx: any, args: TopicSeasonSeriesArgs): Promise<SeasonSeries[]>;
    Posts(topic: Topic, ctx: any, args: TopicPostsArgs): Promise<Post[]>;
}
