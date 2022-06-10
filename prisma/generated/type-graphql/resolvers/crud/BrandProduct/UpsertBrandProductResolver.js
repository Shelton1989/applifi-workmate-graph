"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertBrandProductResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertBrandProductArgs_1 = require("./args/UpsertBrandProductArgs");
const BrandProduct_1 = require("../../../models/BrandProduct");
const helpers_1 = require("../../../helpers");
let UpsertBrandProductResolver = class UpsertBrandProductResolver {
    async upsertBrandProduct(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).brandProduct.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => BrandProduct_1.BrandProduct, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertBrandProductArgs_1.UpsertBrandProductArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertBrandProductResolver.prototype, "upsertBrandProduct", null);
UpsertBrandProductResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => BrandProduct_1.BrandProduct)
], UpsertBrandProductResolver);
exports.UpsertBrandProductResolver = UpsertBrandProductResolver;
