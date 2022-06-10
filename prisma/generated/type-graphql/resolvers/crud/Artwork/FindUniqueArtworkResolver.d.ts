import { GraphQLResolveInfo } from "graphql";
import { FindUniqueArtworkArgs } from "./args/FindUniqueArtworkArgs";
import { Artwork } from "../../../models/Artwork";
export declare class FindUniqueArtworkResolver {
    artwork(ctx: any, info: GraphQLResolveInfo, args: FindUniqueArtworkArgs): Promise<Artwork | null>;
}
