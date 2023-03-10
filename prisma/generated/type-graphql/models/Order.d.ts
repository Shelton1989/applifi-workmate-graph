import { Meal } from "../models/Meal";
import { OrderLineItem } from "../models/OrderLineItem";
import { Tenant } from "../models/Tenant";
import { User } from "../models/User";
import { OrderCount } from "../resolvers/outputs/OrderCount";
export declare class Order {
    id: string;
    Meal?: Meal;
    mealId: string;
    status: "OPEN" | "ORDERED" | "IN_PREPARATION" | "READY_FOR_COLLECTION" | "IN_TRANSIT" | "ARRIVED" | "COMPLETE" | "CANCELLED";
    Patient?: User;
    patientId: string;
    Tenant?: Tenant;
    tenantId: string;
    Items?: OrderLineItem[];
    createdAt: Date;
    updatedAt: Date;
    _count?: OrderCount | null;
}
