"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateInventoryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateInventoryArgs_1 = require("./args/UpdateInventoryArgs");
const Inventory_1 = require("../../../models/Inventory");
const helpers_1 = require("../../../helpers");
let UpdateInventoryResolver = class UpdateInventoryResolver {
    async updateInventory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inventory.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], UpdateInventoryResolver.prototype, "updateInventory", null);
UpdateInventoryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Inventory_1.Inventory)
], UpdateInventoryResolver);
exports.UpdateInventoryResolver = UpdateInventoryResolver;
