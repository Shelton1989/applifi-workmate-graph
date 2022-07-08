import { GraphQLResolveInfo } from "graphql";
import { DeleteManyRequestArgs } from "./args/DeleteManyRequestArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyRequestResolver {
    deleteManyRequest(ctx: any, info: GraphQLResolveInfo, args: DeleteManyRequestArgs): Promise<AffectedRowsOutput>;
}
