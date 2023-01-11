import { GraphQLResolveInfo } from "graphql";
import { CreateManyBookingOrderArgs } from "./args/CreateManyBookingOrderArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyBookingOrderResolver {
    createManyBookingOrder(ctx: any, info: GraphQLResolveInfo, args: CreateManyBookingOrderArgs): Promise<AffectedRowsOutput>;
}
