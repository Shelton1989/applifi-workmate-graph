import { Billing } from "../../../models/Billing";
import { ProductKey } from "../../../models/ProductKey";
import { Tenant } from "../../../models/Tenant";
import { BillingProductKeysArgs } from "./args/BillingProductKeysArgs";
export declare class BillingRelationsResolver {
    Tenant(billing: Billing, ctx: any): Promise<Tenant>;
    ProductKeys(billing: Billing, ctx: any, args: BillingProductKeysArgs): Promise<ProductKey[]>;
}
