import { GraphQLResolveInfo } from "graphql";
import { UpdateManyProductKeyArgs } from "./args/UpdateManyProductKeyArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyProductKeyResolver {
    updateManyProductKey(ctx: any, info: GraphQLResolveInfo, args: UpdateManyProductKeyArgs): Promise<AffectedRowsOutput>;
}
