import { GraphQLResolveInfo } from "graphql";
import { UpsertArtworkArgs } from "./args/UpsertArtworkArgs";
import { Artwork } from "../../../models/Artwork";
export declare class UpsertArtworkResolver {
    upsertArtwork(ctx: any, info: GraphQLResolveInfo, args: UpsertArtworkArgs): Promise<Artwork>;
}
