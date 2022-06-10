import { GraphQLResolveInfo } from "graphql";
import { DeleteManyArtworkArgs } from "./args/DeleteManyArtworkArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyArtworkResolver {
    deleteManyArtwork(ctx: any, info: GraphQLResolveInfo, args: DeleteManyArtworkArgs): Promise<AffectedRowsOutput>;
}
