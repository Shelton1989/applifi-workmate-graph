"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProductKeyResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteProductKeyArgs_1 = require("./args/DeleteProductKeyArgs");
const ProductKey_1 = require("../../../models/ProductKey");
const helpers_1 = require("../../../helpers");
let DeleteProductKeyResolver = class DeleteProductKeyResolver {
    async deleteProductKey(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).productKey.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ProductKey_1.ProductKey, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteProductKeyArgs_1.DeleteProductKeyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteProductKeyResolver.prototype, "deleteProductKey", null);
DeleteProductKeyResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ProductKey_1.ProductKey)
], DeleteProductKeyResolver);
exports.DeleteProductKeyResolver = DeleteProductKeyResolver;
