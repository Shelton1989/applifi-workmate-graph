"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemCreateWithoutMealsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemCreatemealIdsInput_1 = require("../inputs/MealItemCreatemealIdsInput");
const MealItemOptionCreateNestedManyWithoutMealItemInput_1 = require("../inputs/MealItemOptionCreateNestedManyWithoutMealItemInput");
const OrderLineItemCreateNestedManyWithoutSelectedMealItemInput_1 = require("../inputs/OrderLineItemCreateNestedManyWithoutSelectedMealItemInput");
let MealItemCreateWithoutMealsInput = class MealItemCreateWithoutMealsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealItemCreateWithoutMealsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemCreatemealIdsInput_1.MealItemCreatemealIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemCreatemealIdsInput_1.MealItemCreatemealIdsInput)
], MealItemCreateWithoutMealsInput.prototype, "mealIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MealItemCreateWithoutMealsInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MealItemCreateWithoutMealsInput.prototype, "shortDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionCreateNestedManyWithoutMealItemInput_1.MealItemOptionCreateNestedManyWithoutMealItemInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemOptionCreateNestedManyWithoutMealItemInput_1.MealItemOptionCreateNestedManyWithoutMealItemInput)
], MealItemCreateWithoutMealsInput.prototype, "Options", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateNestedManyWithoutSelectedMealItemInput_1.OrderLineItemCreateNestedManyWithoutSelectedMealItemInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateNestedManyWithoutSelectedMealItemInput_1.OrderLineItemCreateNestedManyWithoutSelectedMealItemInput)
], MealItemCreateWithoutMealsInput.prototype, "OrderLineItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MealItemCreateWithoutMealsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MealItemCreateWithoutMealsInput.prototype, "updatedAt", void 0);
MealItemCreateWithoutMealsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemCreateWithoutMealsInput", {
        isAbstract: true
    })
], MealItemCreateWithoutMealsInput);
exports.MealItemCreateWithoutMealsInput = MealItemCreateWithoutMealsInput;
