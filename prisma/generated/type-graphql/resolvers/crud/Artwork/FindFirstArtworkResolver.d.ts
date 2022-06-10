import { GraphQLResolveInfo } from "graphql";
import { FindFirstArtworkArgs } from "./args/FindFirstArtworkArgs";
import { Artwork } from "../../../models/Artwork";
export declare class FindFirstArtworkResolver {
    findFirstArtwork(ctx: any, info: GraphQLResolveInfo, args: FindFirstArtworkArgs): Promise<Artwork | null>;
}
