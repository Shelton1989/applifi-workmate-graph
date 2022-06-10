import { GraphQLResolveInfo } from "graphql";
import { DeleteManyShippingMethodArgs } from "./args/DeleteManyShippingMethodArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyShippingMethodResolver {
    deleteManyShippingMethod(ctx: any, info: GraphQLResolveInfo, args: DeleteManyShippingMethodArgs): Promise<AffectedRowsOutput>;
}
