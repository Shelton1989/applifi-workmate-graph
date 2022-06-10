"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateInventoryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateInventoryArgs_1 = require("./args/AggregateInventoryArgs");
const Inventory_1 = require("../../../models/Inventory");
const AggregateInventory_1 = require("../../outputs/AggregateInventory");
const helpers_1 = require("../../../helpers");
let AggregateInventoryResolver = class AggregateInventoryResolver {
    async aggregateInventory(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).inventory.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
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
], AggregateInventoryResolver.prototype, "aggregateInventory", null);
AggregateInventoryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Inventory_1.Inventory)
], AggregateInventoryResolver);
exports.AggregateInventoryResolver = AggregateInventoryResolver;
