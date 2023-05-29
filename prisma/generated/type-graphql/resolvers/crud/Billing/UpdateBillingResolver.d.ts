import { GraphQLResolveInfo } from "graphql";
import { UpdateBillingArgs } from "./args/UpdateBillingArgs";
import { Billing } from "../../../models/Billing";
export declare class UpdateBillingResolver {
    updateBilling(ctx: any, info: GraphQLResolveInfo, args: UpdateBillingArgs): Promise<Billing | null>;
}
