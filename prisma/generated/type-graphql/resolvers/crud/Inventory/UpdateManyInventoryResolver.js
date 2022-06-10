"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyInventoryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateManyInventoryArgs_1 = require("./args/UpdateManyInventoryArgs");
const Inventory_1 = require("../../../models/Inventory");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyInventoryResolver = class UpdateManyInventoryResolver {
    async updateManyInventory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inventory.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], UpdateManyInventoryResolver.prototype, "updateManyInventory", null);
UpdateManyInventoryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Inventory_1.Inventory)
], UpdateManyInventoryResolver);
exports.UpdateManyInventoryResolver = UpdateManyInventoryResolver;
