import { GraphQLResolveInfo } from "graphql";
import { CreateManyShippingMethodArgs } from "./args/CreateManyShippingMethodArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyShippingMethodResolver {
    createManyShippingMethod(ctx: any, info: GraphQLResolveInfo, args: CreateManyShippingMethodArgs): Promise<AffectedRowsOutput>;
}
