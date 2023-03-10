"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Meal_1 = require("../../../models/Meal");
const MealItem_1 = require("../../../models/MealItem");
const MealItemOption_1 = require("../../../models/MealItemOption");
const OrderLineItem_1 = require("../../../models/OrderLineItem");
const MealItemMealsArgs_1 = require("./args/MealItemMealsArgs");
const MealItemOptionsArgs_1 = require("./args/MealItemOptionsArgs");
const MealItemOrderLineItemsArgs_1 = require("./args/MealItemOrderLineItemsArgs");
const helpers_1 = require("../../../helpers");
let MealItemRelationsResolver = class MealItemRelationsResolver {
    async Meals(mealItem, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).mealItem.findUnique({
            where: {
                id: mealItem.id,
            },
        }).Meals(args);
    }
    async Options(mealItem, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).mealItem.findUnique({
            where: {
                id: mealItem.id,
            },
        }).Options(args);
    }
    async OrderLineItems(mealItem, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).mealItem.findUnique({
            where: {
                id: mealItem.id,
            },
        }).OrderLineItems(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Meal_1.Meal], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [MealItem_1.MealItem, Object, MealItemMealsArgs_1.MealItemMealsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealItemRelationsResolver.prototype, "Meals", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [MealItemOption_1.MealItemOption], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [MealItem_1.MealItem, Object, MealItemOptionsArgs_1.MealItemOptionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealItemRelationsResolver.prototype, "Options", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [OrderLineItem_1.OrderLineItem], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [MealItem_1.MealItem, Object, MealItemOrderLineItemsArgs_1.MealItemOrderLineItemsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealItemRelationsResolver.prototype, "OrderLineItems", null);
MealItemRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => MealItem_1.MealItem)
], MealItemRelationsResolver);
exports.MealItemRelationsResolver = MealItemRelationsResolver;
