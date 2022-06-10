import { GraphQLResolveInfo } from "graphql";
import { CreateManyArtworkArgs } from "./args/CreateManyArtworkArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyArtworkResolver {
    createManyArtwork(ctx: any, info: GraphQLResolveInfo, args: CreateManyArtworkArgs): Promise<AffectedRowsOutput>;
}
