"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateInventoryArgs_1 = require("./args/AggregateInventoryArgs");
const CreateInventoryArgs_1 = require("./args/CreateInventoryArgs");
const CreateManyInventoryArgs_1 = require("./args/CreateManyInventoryArgs");
const DeleteInventoryArgs_1 = require("./args/DeleteInventoryArgs");
const DeleteManyInventoryArgs_1 = require("./args/DeleteManyInventoryArgs");
const FindFirstInventoryArgs_1 = require("./args/FindFirstInventoryArgs");
const FindManyInventoryArgs_1 = require("./args/FindManyInventoryArgs");
const FindUniqueInventoryArgs_1 = require("./args/FindUniqueInventoryArgs");
const GroupByInventoryArgs_1 = require("./args/GroupByInventoryArgs");
const UpdateInventoryArgs_1 = require("./args/UpdateInventoryArgs");
const UpdateManyInventoryArgs_1 = require("./args/UpdateManyInventoryArgs");
const UpsertInventoryArgs_1 = require("./args/UpsertInventoryArgs");
const helpers_1 = require("../../../helpers");
const Inventory_1 = require("../../../models/Inventory");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateInventory_1 = require("../../outputs/AggregateInventory");
const InventoryGroupBy_1 = require("../../outputs/InventoryGroupBy");
let InventoryCrudResolver = class InventoryCrudResolver {
    async inventory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inventory.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstInventory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inventory.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async inventories(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inventory.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createInventory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inventory.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyInventory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inventory.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteInventory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inventory.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateInventory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inventory.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyInventory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inventory.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyInventory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inventory.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertInventory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inventory.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateInventory(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).inventory.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByInventory(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inventory.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Inventory_1.Inventory, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueInventoryArgs_1.FindUniqueInventoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InventoryCrudResolver.prototype, "inventory", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Inventory_1.Inventory, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstInventoryArgs_1.FindFirstInventoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InventoryCrudResolver.prototype, "findFirstInventory", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Inventory_1.Inventory], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyInventoryArgs_1.FindManyInventoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InventoryCrudResolver.prototype, "inventories", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Inventory_1.Inventory, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateInventoryArgs_1.CreateInventoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InventoryCrudResolver.prototype, "createInventory", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyInventoryArgs_1.CreateManyInventoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InventoryCrudResolver.prototype, "createManyInventory", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Inventory_1.Inventory, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteInventoryArgs_1.DeleteInventoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InventoryCrudResolver.prototype, "deleteInventory", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Inventory_1.Inventory, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateInventoryArgs_1.UpdateInventoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InventoryCrudResolver.prototype, "updateInventory", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyInventoryArgs_1.DeleteManyInventoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InventoryCrudResolver.prototype, "deleteManyInventory", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyInventoryArgs_1.UpdateManyInventoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InventoryCrudResolver.prototype, "updateManyInventory", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Inventory_1.Inventory, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertInventoryArgs_1.UpsertInventoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InventoryCrudResolver.prototype, "upsertInventory", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateInventory_1.AggregateInventory, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateInventoryArgs_1.AggregateInventoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InventoryCrudResolver.prototype, "aggregateInventory", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [InventoryGroupBy_1.InventoryGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByInventoryArgs_1.GroupByInventoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InventoryCrudResolver.prototype, "groupByInventory", null);
InventoryCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Inventory_1.Inventory)
], InventoryCrudResolver);
exports.InventoryCrudResolver = InventoryCrudResolver;
