import { GraphQLResolveInfo } from "graphql";
import { UpdateManyBillingArgs } from "./args/UpdateManyBillingArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyBillingResolver {
    updateManyBilling(ctx: any, info: GraphQLResolveInfo, args: UpdateManyBillingArgs): Promise<AffectedRowsOutput>;
}
