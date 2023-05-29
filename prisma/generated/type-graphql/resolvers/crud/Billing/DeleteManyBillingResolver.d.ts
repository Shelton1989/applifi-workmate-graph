import { GraphQLResolveInfo } from "graphql";
import { DeleteManyBillingArgs } from "./args/DeleteManyBillingArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyBillingResolver {
    deleteManyBilling(ctx: any, info: GraphQLResolveInfo, args: DeleteManyBillingArgs): Promise<AffectedRowsOutput>;
}
