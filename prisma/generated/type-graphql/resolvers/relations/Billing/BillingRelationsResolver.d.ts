import { Billing } from "../../../models/Billing";
import { ProductKey } from "../../../models/ProductKey";
import { Tenant } from "../../../models/Tenant";
export declare class BillingRelationsResolver {
    Tenant(billing: Billing, ctx: any): Promise<Tenant>;
    ProductKey(billing: Billing, ctx: any): Promise<ProductKey | null>;
}
