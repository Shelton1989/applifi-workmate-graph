"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueInventoryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueInventoryArgs_1 = require("./args/FindUniqueInventoryArgs");
const Inventory_1 = require("../../../models/Inventory");
const helpers_1 = require("../../../helpers");
let FindUniqueInventoryResolver = class FindUniqueInventoryResolver {
    async inventory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inventory.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
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
], FindUniqueInventoryResolver.prototype, "inventory", null);
FindUniqueInventoryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Inventory_1.Inventory)
], FindUniqueInventoryResolver);
exports.FindUniqueInventoryResolver = FindUniqueInventoryResolver;
