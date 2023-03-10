import { OrderCountAggregate } from "../outputs/OrderCountAggregate";
import { OrderMaxAggregate } from "../outputs/OrderMaxAggregate";
import { OrderMinAggregate } from "../outputs/OrderMinAggregate";
export declare class OrderGroupBy {
    id: string;
    mealId: string;
    status: "OPEN" | "ORDERED" | "IN_PREPARATION" | "READY_FOR_COLLECTION" | "IN_TRANSIT" | "ARRIVED" | "COMPLETE" | "CANCELLED";
    patientId: string;
    tenantId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: OrderCountAggregate | null;
    _min: OrderMinAggregate | null;
    _max: OrderMaxAggregate | null;
}
