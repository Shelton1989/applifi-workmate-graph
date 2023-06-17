import { Billing } from "../models/Billing";
export declare class ProductKey {
    id: string;
    Billing?: Billing | null;
    billingId?: string | null;
    createdBy?: string | null;
    key: string;
    createdAt: Date;
    updatedAt: Date;
}
