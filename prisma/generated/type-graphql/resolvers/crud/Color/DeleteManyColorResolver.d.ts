import { GraphQLResolveInfo } from "graphql";
import { DeleteManyColorArgs } from "./args/DeleteManyColorArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyColorResolver {
    deleteManyColor(ctx: any, info: GraphQLResolveInfo, args: DeleteManyColorArgs): Promise<AffectedRowsOutput>;
}
