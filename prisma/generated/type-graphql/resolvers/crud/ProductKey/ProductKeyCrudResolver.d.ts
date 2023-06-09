import { GraphQLResolveInfo } from "graphql";
import { AggregateProductKeyArgs } from "./args/AggregateProductKeyArgs";
import { CreateManyProductKeyArgs } from "./args/CreateManyProductKeyArgs";
import { CreateProductKeyArgs } from "./args/CreateProductKeyArgs";
import { DeleteManyProductKeyArgs } from "./args/DeleteManyProductKeyArgs";
import { DeleteProductKeyArgs } from "./args/DeleteProductKeyArgs";
import { FindFirstProductKeyArgs } from "./args/FindFirstProductKeyArgs";
import { FindManyProductKeyArgs } from "./args/FindManyProductKeyArgs";
import { FindUniqueProductKeyArgs } from "./args/FindUniqueProductKeyArgs";
import { GroupByProductKeyArgs } from "./args/GroupByProductKeyArgs";
import { UpdateManyProductKeyArgs } from "./args/UpdateManyProductKeyArgs";
import { UpdateProductKeyArgs } from "./args/UpdateProductKeyArgs";
import { UpsertProductKeyArgs } from "./args/UpsertProductKeyArgs";
import { ProductKey } from "../../../models/ProductKey";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateProductKey } from "../../outputs/AggregateProductKey";
import { ProductKeyGroupBy } from "../../outputs/ProductKeyGroupBy";
export declare class ProductKeyCrudResolver {
    productKey(ctx: any, info: GraphQLResolveInfo, args: FindUniqueProductKeyArgs): Promise<ProductKey | null>;
    findFirstProductKey(ctx: any, info: GraphQLResolveInfo, args: FindFirstProductKeyArgs): Promise<ProductKey | null>;
    productKeys(ctx: any, info: GraphQLResolveInfo, args: FindManyProductKeyArgs): Promise<ProductKey[]>;
    createProductKey(ctx: any, info: GraphQLResolveInfo, args: CreateProductKeyArgs): Promise<ProductKey>;
    createManyProductKey(ctx: any, info: GraphQLResolveInfo, args: CreateManyProductKeyArgs): Promise<AffectedRowsOutput>;
    deleteProductKey(ctx: any, info: GraphQLResolveInfo, args: DeleteProductKeyArgs): Promise<ProductKey | null>;
    updateProductKey(ctx: any, info: GraphQLResolveInfo, args: UpdateProductKeyArgs): Promise<ProductKey | null>;
    deleteManyProductKey(ctx: any, info: GraphQLResolveInfo, args: DeleteManyProductKeyArgs): Promise<AffectedRowsOutput>;
    updateManyProductKey(ctx: any, info: GraphQLResolveInfo, args: UpdateManyProductKeyArgs): Promise<AffectedRowsOutput>;
    upsertProductKey(ctx: any, info: GraphQLResolveInfo, args: UpsertProductKeyArgs): Promise<ProductKey>;
    aggregateProductKey(ctx: any, info: GraphQLResolveInfo, args: AggregateProductKeyArgs): Promise<AggregateProductKey>;
    groupByProductKey(ctx: any, info: GraphQLResolveInfo, args: GroupByProductKeyArgs): Promise<ProductKeyGroupBy[]>;
}
