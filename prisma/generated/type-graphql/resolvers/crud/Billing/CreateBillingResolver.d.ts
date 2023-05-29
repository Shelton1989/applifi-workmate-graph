import { GraphQLResolveInfo } from "graphql";
import { CreateBillingArgs } from "./args/CreateBillingArgs";
import { Billing } from "../../../models/Billing";
export declare class CreateBillingResolver {
    createBilling(ctx: any, info: GraphQLResolveInfo, args: CreateBillingArgs): Promise<Billing>;
}
