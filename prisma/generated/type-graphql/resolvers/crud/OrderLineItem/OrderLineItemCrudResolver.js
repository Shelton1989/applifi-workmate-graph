"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateOrderLineItemArgs_1 = require("./args/AggregateOrderLineItemArgs");
const CreateManyOrderLineItemArgs_1 = require("./args/CreateManyOrderLineItemArgs");
const CreateOrderLineItemArgs_1 = require("./args/CreateOrderLineItemArgs");
const DeleteManyOrderLineItemArgs_1 = require("./args/DeleteManyOrderLineItemArgs");
const DeleteOrderLineItemArgs_1 = require("./args/DeleteOrderLineItemArgs");
const FindFirstOrderLineItemArgs_1 = require("./args/FindFirstOrderLineItemArgs");
const FindManyOrderLineItemArgs_1 = require("./args/FindManyOrderLineItemArgs");
const FindUniqueOrderLineItemArgs_1 = require("./args/FindUniqueOrderLineItemArgs");
const GroupByOrderLineItemArgs_1 = require("./args/GroupByOrderLineItemArgs");
const UpdateManyOrderLineItemArgs_1 = require("./args/UpdateManyOrderLineItemArgs");
const UpdateOrderLineItemArgs_1 = require("./args/UpdateOrderLineItemArgs");
const UpsertOrderLineItemArgs_1 = require("./args/UpsertOrderLineItemArgs");
const helpers_1 = require("../../../helpers");
const OrderLineItem_1 = require("../../../models/OrderLineItem");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateOrderLineItem_1 = require("../../outputs/AggregateOrderLineItem");
const OrderLineItemGroupBy_1 = require("../../outputs/OrderLineItemGroupBy");
let OrderLineItemCrudResolver = class OrderLineItemCrudResolver {
    async orderLineItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).orderLineItem.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstOrderLineItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).orderLineItem.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async orderLineItems(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).orderLineItem.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOrderLineItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).orderLineItem.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyOrderLineItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).orderLineItem.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOrderLineItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).orderLineItem.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOrderLineItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).orderLineItem.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyOrderLineItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).orderLineItem.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyOrderLineItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).orderLineItem.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOrderLineItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).orderLineItem.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateOrderLineItem(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).orderLineItem.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByOrderLineItem(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).orderLineItem.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => OrderLineItem_1.OrderLineItem, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueOrderLineItemArgs_1.FindUniqueOrderLineItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderLineItemCrudResolver.prototype, "orderLineItem", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => OrderLineItem_1.OrderLineItem, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstOrderLineItemArgs_1.FindFirstOrderLineItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderLineItemCrudResolver.prototype, "findFirstOrderLineItem", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [OrderLineItem_1.OrderLineItem], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyOrderLineItemArgs_1.FindManyOrderLineItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderLineItemCrudResolver.prototype, "orderLineItems", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => OrderLineItem_1.OrderLineItem, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOrderLineItemArgs_1.CreateOrderLineItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderLineItemCrudResolver.prototype, "createOrderLineItem", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyOrderLineItemArgs_1.CreateManyOrderLineItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderLineItemCrudResolver.prototype, "createManyOrderLineItem", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => OrderLineItem_1.OrderLineItem, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOrderLineItemArgs_1.DeleteOrderLineItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderLineItemCrudResolver.prototype, "deleteOrderLineItem", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => OrderLineItem_1.OrderLineItem, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOrderLineItemArgs_1.UpdateOrderLineItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderLineItemCrudResolver.prototype, "updateOrderLineItem", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyOrderLineItemArgs_1.DeleteManyOrderLineItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderLineItemCrudResolver.prototype, "deleteManyOrderLineItem", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyOrderLineItemArgs_1.UpdateManyOrderLineItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderLineItemCrudResolver.prototype, "updateManyOrderLineItem", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => OrderLineItem_1.OrderLineItem, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOrderLineItemArgs_1.UpsertOrderLineItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderLineItemCrudResolver.prototype, "upsertOrderLineItem", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateOrderLineItem_1.AggregateOrderLineItem, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateOrderLineItemArgs_1.AggregateOrderLineItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderLineItemCrudResolver.prototype, "aggregateOrderLineItem", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [OrderLineItemGroupBy_1.OrderLineItemGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByOrderLineItemArgs_1.GroupByOrderLineItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderLineItemCrudResolver.prototype, "groupByOrderLineItem", null);
OrderLineItemCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => OrderLineItem_1.OrderLineItem)
], OrderLineItemCrudResolver);
exports.OrderLineItemCrudResolver = OrderLineItemCrudResolver;
