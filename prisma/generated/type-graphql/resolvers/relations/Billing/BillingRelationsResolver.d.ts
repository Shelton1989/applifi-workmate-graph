import { Billing } from "../../../models/Billing";
import { Tenant } from "../../../models/Tenant";
export declare class BillingRelationsResolver {
    Tenant(billing: Billing, ctx: any): Promise<Tenant>;
}
