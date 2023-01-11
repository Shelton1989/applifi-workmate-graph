import { GraphQLResolveInfo } from "graphql";
import { UpdateManyBookingOrderArgs } from "./args/UpdateManyBookingOrderArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyBookingOrderResolver {
    updateManyBookingOrder(ctx: any, info: GraphQLResolveInfo, args: UpdateManyBookingOrderArgs): Promise<AffectedRowsOutput>;
}
