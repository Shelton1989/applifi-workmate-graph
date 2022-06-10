"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteBrandProductResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteBrandProductArgs_1 = require("./args/DeleteBrandProductArgs");
const BrandProduct_1 = require("../../../models/BrandProduct");
const helpers_1 = require("../../../helpers");
let DeleteBrandProductResolver = class DeleteBrandProductResolver {
    async deleteBrandProduct(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).brandProduct.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => BrandProduct_1.BrandProduct, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteBrandProductArgs_1.DeleteBrandProductArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteBrandProductResolver.prototype, "deleteBrandProduct", null);
DeleteBrandProductResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => BrandProduct_1.BrandProduct)
], DeleteBrandProductResolver);
exports.DeleteBrandProductResolver = DeleteBrandProductResolver;
