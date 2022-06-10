import { GraphQLResolveInfo } from "graphql";
import { AggregateArtworkArgs } from "./args/AggregateArtworkArgs";
import { AggregateArtwork } from "../../outputs/AggregateArtwork";
export declare class AggregateArtworkResolver {
    aggregateArtwork(ctx: any, info: GraphQLResolveInfo, args: AggregateArtworkArgs): Promise<AggregateArtwork>;
}
