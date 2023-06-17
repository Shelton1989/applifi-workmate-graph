import { Billing } from "../../../models/Billing";
import { ProductKey } from "../../../models/ProductKey";
export declare class ProductKeyRelationsResolver {
    Billing(productKey: ProductKey, ctx: any): Promise<Billing>;
}
