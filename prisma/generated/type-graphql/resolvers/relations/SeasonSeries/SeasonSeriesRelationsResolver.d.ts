import { Episode } from "../../../models/Episode";
import { Post } from "../../../models/Post";
import { Reaction } from "../../../models/Reaction";
import { SeasonSeries } from "../../../models/SeasonSeries";
import { Topic } from "../../../models/Topic";
import { SeasonSeriesEpisodesArgs } from "./args/SeasonSeriesEpisodesArgs";
import { SeasonSeriesPostsArgs } from "./args/SeasonSeriesPostsArgs";
import { SeasonSeriesReactionsArgs } from "./args/SeasonSeriesReactionsArgs";
export declare class SeasonSeriesRelationsResolver {
    Topic(seasonSeries: SeasonSeries, ctx: any): Promise<Topic>;
    Reactions(seasonSeries: SeasonSeries, ctx: any, args: SeasonSeriesReactionsArgs): Promise<Reaction[]>;
    Episodes(seasonSeries: SeasonSeries, ctx: any, args: SeasonSeriesEpisodesArgs): Promise<Episode[]>;
    Posts(seasonSeries: SeasonSeries, ctx: any, args: SeasonSeriesPostsArgs): Promise<Post[]>;
}
