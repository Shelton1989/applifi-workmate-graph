import { InventoryCountAggregate } from "../outputs/InventoryCountAggregate";
import { InventoryMaxAggregate } from "../outputs/InventoryMaxAggregate";
import { InventoryMinAggregate } from "../outputs/InventoryMinAggregate";
export declare class AggregateInventory {
    _count: InventoryCountAggregate | null;
    _min: InventoryMinAggregate | null;
    _max: InventoryMaxAggregate | null;
}
