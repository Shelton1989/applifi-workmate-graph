"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateProductArgs_1 = require("./args/UpdateProductArgs");
const Product_1 = require("../../../models/Product");
const helpers_1 = require("../../../helpers");
let UpdateProductResolver = class UpdateProductResolver {
    async updateProduct(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Product_1.Product, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateProductArgs_1.UpdateProductArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateProductResolver.prototype, "updateProduct", null);
UpdateProductResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Product_1.Product)
], UpdateProductResolver);
exports.UpdateProductResolver = UpdateProductResolver;
