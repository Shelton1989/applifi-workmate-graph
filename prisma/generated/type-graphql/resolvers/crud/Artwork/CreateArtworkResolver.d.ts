import { GraphQLResolveInfo } from "graphql";
import { CreateArtworkArgs } from "./args/CreateArtworkArgs";
import { Artwork } from "../../../models/Artwork";
export declare class CreateArtworkResolver {
    createArtwork(ctx: any, info: GraphQLResolveInfo, args: CreateArtworkArgs): Promise<Artwork>;
}
