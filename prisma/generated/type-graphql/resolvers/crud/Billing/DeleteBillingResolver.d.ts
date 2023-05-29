import { GraphQLResolveInfo } from "graphql";
import { DeleteBillingArgs } from "./args/DeleteBillingArgs";
import { Billing } from "../../../models/Billing";
export declare class DeleteBillingResolver {
    deleteBilling(ctx: any, info: GraphQLResolveInfo, args: DeleteBillingArgs): Promise<Billing | null>;
}
