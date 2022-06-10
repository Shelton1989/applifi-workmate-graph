import { GraphQLResolveInfo } from "graphql";
import { AggregateInventoryArgs } from "./args/AggregateInventoryArgs";
import { AggregateInventory } from "../../outputs/AggregateInventory";
export declare class AggregateInventoryResolver {
    aggregateInventory(ctx: any, info: GraphQLResolveInfo, args: AggregateInventoryArgs): Promise<AggregateInventory>;
}
