import { AggregateRating } from "../../../models/AggregateRating";
import { Episode } from "../../../models/Episode";
import { Post } from "../../../models/Post";
import { Reaction } from "../../../models/Reaction";
import { SeasonSeries } from "../../../models/SeasonSeries";
import { EpisodePostsArgs } from "./args/EpisodePostsArgs";
import { EpisodeReactionsArgs } from "./args/EpisodeReactionsArgs";
export declare class EpisodeRelationsResolver {
    SeasonSeries(episode: Episode, ctx: any): Promise<SeasonSeries>;
    AggregateRating(episode: Episode, ctx: any): Promise<AggregateRating | null>;
    Reactions(episode: Episode, ctx: any, args: EpisodeReactionsArgs): Promise<Reaction[]>;
    Posts(episode: Episode, ctx: any, args: EpisodePostsArgs): Promise<Post[]>;
}
