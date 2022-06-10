"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyBrandProductResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyBrandProductArgs_1 = require("./args/FindManyBrandProductArgs");
const BrandProduct_1 = require("../../../models/BrandProduct");
const helpers_1 = require("../../../helpers");
let FindManyBrandProductResolver = class FindManyBrandProductResolver {
    async brandProducts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).brandProduct.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [BrandProduct_1.BrandProduct], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyBrandProductArgs_1.FindManyBrandProductArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyBrandProductResolver.prototype, "brandProducts", null);
FindManyBrandProductResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => BrandProduct_1.BrandProduct)
], FindManyBrandProductResolver);
exports.FindManyBrandProductResolver = FindManyBrandProductResolver;
