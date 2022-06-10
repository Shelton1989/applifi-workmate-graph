"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Brand_1 = require("../../../models/Brand");
const BrandProduct_1 = require("../../../models/BrandProduct");
const BrandBrandProductsArgs_1 = require("./args/BrandBrandProductsArgs");
const helpers_1 = require("../../../helpers");
let BrandRelationsResolver = class BrandRelationsResolver {
    async BrandProducts(brand, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).brand.findUnique({
            where: {
                id: brand.id,
            },
        }).BrandProducts(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [BrandProduct_1.BrandProduct], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Brand_1.Brand, Object, BrandBrandProductsArgs_1.BrandBrandProductsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BrandRelationsResolver.prototype, "BrandProducts", null);
BrandRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Brand_1.Brand)
], BrandRelationsResolver);
exports.BrandRelationsResolver = BrandRelationsResolver;
