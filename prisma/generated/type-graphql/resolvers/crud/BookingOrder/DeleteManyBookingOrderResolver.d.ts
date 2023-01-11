import { GraphQLResolveInfo } from "graphql";
import { DeleteManyBookingOrderArgs } from "./args/DeleteManyBookingOrderArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyBookingOrderResolver {
    deleteManyBookingOrder(ctx: any, info: GraphQLResolveInfo, args: DeleteManyBookingOrderArgs): Promise<AffectedRowsOutput>;
}
