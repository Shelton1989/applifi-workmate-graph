import { GraphQLResolveInfo } from "graphql";
import { UpdateArtworkArgs } from "./args/UpdateArtworkArgs";
import { Artwork } from "../../../models/Artwork";
export declare class UpdateArtworkResolver {
    updateArtwork(ctx: any, info: GraphQLResolveInfo, args: UpdateArtworkArgs): Promise<Artwork | null>;
}
