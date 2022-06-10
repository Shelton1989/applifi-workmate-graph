import { GraphQLResolveInfo } from "graphql";
import { DeleteArtworkArgs } from "./args/DeleteArtworkArgs";
import { Artwork } from "../../../models/Artwork";
export declare class DeleteArtworkResolver {
    deleteArtwork(ctx: any, info: GraphQLResolveInfo, args: DeleteArtworkArgs): Promise<Artwork | null>;
}
