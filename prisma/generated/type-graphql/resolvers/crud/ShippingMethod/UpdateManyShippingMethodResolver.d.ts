import { GraphQLResolveInfo } from "graphql";
import { UpdateManyShippingMethodArgs } from "./args/UpdateManyShippingMethodArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyShippingMethodResolver {
    updateManyShippingMethod(ctx: any, info: GraphQLResolveInfo, args: UpdateManyShippingMethodArgs): Promise<AffectedRowsOutput>;
}
