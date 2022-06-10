import { GraphQLResolveInfo } from "graphql";
import { CreateManyOrderLineItemArgs } from "./args/CreateManyOrderLineItemArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyOrderLineItemResolver {
    createManyOrderLineItem(ctx: any, info: GraphQLResolveInfo, args: CreateManyOrderLineItemArgs): Promise<AffectedRowsOutput>;
}
