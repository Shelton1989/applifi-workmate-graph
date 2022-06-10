"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingMethodRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Order_1 = require("../../../models/Order");
const Price_1 = require("../../../models/Price");
const ShippingMethod_1 = require("../../../models/ShippingMethod");
const ShippingMethodOrdersArgs_1 = require("./args/ShippingMethodOrdersArgs");
const helpers_1 = require("../../../helpers");
let ShippingMethodRelationsResolver = class ShippingMethodRelationsResolver {
    async price(shippingMethod, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).shippingMethod.findUnique({
            where: {
                id: shippingMethod.id,
            },
        }).price({});
    }
    async Orders(shippingMethod, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).shippingMethod.findUnique({
            where: {
                id: shippingMethod.id,
            },
        }).Orders(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Price_1.Price, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ShippingMethod_1.ShippingMethod, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ShippingMethodRelationsResolver.prototype, "price", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Order_1.Order], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ShippingMethod_1.ShippingMethod, Object, ShippingMethodOrdersArgs_1.ShippingMethodOrdersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShippingMethodRelationsResolver.prototype, "Orders", null);
ShippingMethodRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ShippingMethod_1.ShippingMethod)
], ShippingMethodRelationsResolver);
exports.ShippingMethodRelationsResolver = ShippingMethodRelationsResolver;
