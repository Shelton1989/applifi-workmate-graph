"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemOptionRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItem_1 = require("../../../models/MealItem");
const MealItemOption_1 = require("../../../models/MealItemOption");
const OrderLineItem_1 = require("../../../models/OrderLineItem");
const MealItemOptionOrderLineItemsArgs_1 = require("./args/MealItemOptionOrderLineItemsArgs");
const helpers_1 = require("../../../helpers");
let MealItemOptionRelationsResolver = class MealItemOptionRelationsResolver {
    async MealItem(mealItemOption, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).mealItemOption.findUnique({
            where: {
                id: mealItemOption.id,
            },
        }).MealItem({});
    }
    async OrderLineItems(mealItemOption, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).mealItemOption.findUnique({
            where: {
                id: mealItemOption.id,
            },
        }).OrderLineItems(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => MealItem_1.MealItem, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [MealItemOption_1.MealItemOption, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MealItemOptionRelationsResolver.prototype, "MealItem", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [OrderLineItem_1.OrderLineItem], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [MealItemOption_1.MealItemOption, Object, MealItemOptionOrderLineItemsArgs_1.MealItemOptionOrderLineItemsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealItemOptionRelationsResolver.prototype, "OrderLineItems", null);
MealItemOptionRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => MealItemOption_1.MealItemOption)
], MealItemOptionRelationsResolver);
exports.MealItemOptionRelationsResolver = MealItemOptionRelationsResolver;
