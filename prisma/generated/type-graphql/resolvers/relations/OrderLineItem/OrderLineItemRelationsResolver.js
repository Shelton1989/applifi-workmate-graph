"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItem_1 = require("../../../models/MealItem");
const MealItemOption_1 = require("../../../models/MealItemOption");
const Order_1 = require("../../../models/Order");
const OrderLineItem_1 = require("../../../models/OrderLineItem");
const helpers_1 = require("../../../helpers");
let OrderLineItemRelationsResolver = class OrderLineItemRelationsResolver {
    async selectedMealItem(orderLineItem, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).orderLineItem.findUnique({
            where: {
                id: orderLineItem.id,
            },
        }).selectedMealItem({});
    }
    async selectedMealItemOption(orderLineItem, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).orderLineItem.findUnique({
            where: {
                id: orderLineItem.id,
            },
        }).selectedMealItemOption({});
    }
    async Order(orderLineItem, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).orderLineItem.findUnique({
            where: {
                id: orderLineItem.id,
            },
        }).Order({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => MealItem_1.MealItem, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [OrderLineItem_1.OrderLineItem, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderLineItemRelationsResolver.prototype, "selectedMealItem", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => MealItemOption_1.MealItemOption, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [OrderLineItem_1.OrderLineItem, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderLineItemRelationsResolver.prototype, "selectedMealItemOption", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Order_1.Order, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [OrderLineItem_1.OrderLineItem, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderLineItemRelationsResolver.prototype, "Order", null);
OrderLineItemRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => OrderLineItem_1.OrderLineItem)
], OrderLineItemRelationsResolver);
exports.OrderLineItemRelationsResolver = OrderLineItemRelationsResolver;
