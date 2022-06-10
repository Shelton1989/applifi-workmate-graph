"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Color_1 = require("../../../models/Color");
const OrderLineItem_1 = require("../../../models/OrderLineItem");
const Product_1 = require("../../../models/Product");
const ColorOrderLineItemsArgs_1 = require("./args/ColorOrderLineItemsArgs");
const ColorProductsArgs_1 = require("./args/ColorProductsArgs");
const helpers_1 = require("../../../helpers");
let ColorRelationsResolver = class ColorRelationsResolver {
    async Products(color, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).color.findUnique({
            where: {
                id: color.id,
            },
        }).Products(args);
    }
    async OrderLineItems(color, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).color.findUnique({
            where: {
                id: color.id,
            },
        }).OrderLineItems(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Product_1.Product], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Color_1.Color, Object, ColorProductsArgs_1.ColorProductsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ColorRelationsResolver.prototype, "Products", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [OrderLineItem_1.OrderLineItem], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Color_1.Color, Object, ColorOrderLineItemsArgs_1.ColorOrderLineItemsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ColorRelationsResolver.prototype, "OrderLineItems", null);
ColorRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Color_1.Color)
], ColorRelationsResolver);
exports.ColorRelationsResolver = ColorRelationsResolver;
