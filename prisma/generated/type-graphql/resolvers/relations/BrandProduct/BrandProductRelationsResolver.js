"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandProductRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Brand_1 = require("../../../models/Brand");
const BrandProduct_1 = require("../../../models/BrandProduct");
const Product_1 = require("../../../models/Product");
const BrandProductProductsArgs_1 = require("./args/BrandProductProductsArgs");
const helpers_1 = require("../../../helpers");
let BrandProductRelationsResolver = class BrandProductRelationsResolver {
    async brand(brandProduct, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).brandProduct.findUnique({
            where: {
                id: brandProduct.id,
            },
        }).brand({});
    }
    async Products(brandProduct, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).brandProduct.findUnique({
            where: {
                id: brandProduct.id,
            },
        }).Products(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Brand_1.Brand, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [BrandProduct_1.BrandProduct, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BrandProductRelationsResolver.prototype, "brand", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Product_1.Product], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [BrandProduct_1.BrandProduct, Object, BrandProductProductsArgs_1.BrandProductProductsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BrandProductRelationsResolver.prototype, "Products", null);
BrandProductRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => BrandProduct_1.BrandProduct)
], BrandProductRelationsResolver);
exports.BrandProductRelationsResolver = BrandProductRelationsResolver;
