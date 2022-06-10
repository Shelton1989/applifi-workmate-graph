"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertInventoryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertInventoryArgs_1 = require("./args/UpsertInventoryArgs");
const Inventory_1 = require("../../../models/Inventory");
const helpers_1 = require("../../../helpers");
let UpsertInventoryResolver = class UpsertInventoryResolver {
    async upsertInventory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inventory.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], UpsertInventoryResolver.prototype, "upsertInventory", null);
UpsertInventoryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Inventory_1.Inventory)
], UpsertInventoryResolver);
exports.UpsertInventoryResolver = UpsertInventoryResolver;
