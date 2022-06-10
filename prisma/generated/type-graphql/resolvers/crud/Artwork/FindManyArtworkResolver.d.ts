import { GraphQLResolveInfo } from "graphql";
import { FindManyArtworkArgs } from "./args/FindManyArtworkArgs";
import { Artwork } from "../../../models/Artwork";
export declare class FindManyArtworkResolver {
    artworks(ctx: any, info: GraphQLResolveInfo, args: FindManyArtworkArgs): Promise<Artwork[]>;
}
