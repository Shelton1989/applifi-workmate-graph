import { GraphQLResolveInfo } from "graphql";
import { DeleteManyQueryArgs } from "./args/DeleteManyQueryArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyQueryResolver {
    deleteManyQuery(ctx: any, info: GraphQLResolveInfo, args: DeleteManyQueryArgs): Promise<AffectedRowsOutput>;
}
