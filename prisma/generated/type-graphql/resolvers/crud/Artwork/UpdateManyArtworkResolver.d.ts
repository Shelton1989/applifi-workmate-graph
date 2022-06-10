import { GraphQLResolveInfo } from "graphql";
import { UpdateManyArtworkArgs } from "./args/UpdateManyArtworkArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyArtworkResolver {
    updateManyArtwork(ctx: any, info: GraphQLResolveInfo, args: UpdateManyArtworkArgs): Promise<AffectedRowsOutput>;
}
