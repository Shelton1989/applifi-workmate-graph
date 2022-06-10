import { GraphQLResolveInfo } from "graphql";
import { GroupByArtworkArgs } from "./args/GroupByArtworkArgs";
import { ArtworkGroupBy } from "../../outputs/ArtworkGroupBy";
export declare class GroupByArtworkResolver {
    groupByArtwork(ctx: any, info: GraphQLResolveInfo, args: GroupByArtworkArgs): Promise<ArtworkGroupBy[]>;
}
