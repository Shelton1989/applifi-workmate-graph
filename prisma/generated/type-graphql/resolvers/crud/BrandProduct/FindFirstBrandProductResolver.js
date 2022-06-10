"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstBrandProductResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstBrandProductArgs_1 = require("./args/FindFirstBrandProductArgs");
const BrandProduct_1 = require("../../../models/BrandProduct");
const helpers_1 = require("../../../helpers");
let FindFirstBrandProductResolver = class FindFirstBrandProductResolver {
    async findFirstBrandProduct(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).brandProduct.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => BrandProduct_1.BrandProduct, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstBrandProductArgs_1.FindFirstBrandProductArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstBrandProductResolver.prototype, "findFirstBrandProduct", null);
FindFirstBrandProductResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => BrandProduct_1.BrandProduct)
], FindFirstBrandProductResolver);
exports.FindFirstBrandProductResolver = FindFirstBrandProductResolver;
