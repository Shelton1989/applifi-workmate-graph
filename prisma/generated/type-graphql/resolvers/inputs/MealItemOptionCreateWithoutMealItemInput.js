"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemOptionCreateWithoutMealItemInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateNestedManyWithoutSelectedMealItemOptionInput_1 = require("../inputs/OrderLineItemCreateNestedManyWithoutSelectedMealItemOptionInput");
let MealItemOptionCreateWithoutMealItemInput = class MealItemOptionCreateWithoutMealItemInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOptionCreateWithoutMealItemInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOptionCreateWithoutMealItemInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOptionCreateWithoutMealItemInput.prototype, "shortDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateNestedManyWithoutSelectedMealItemOptionInput_1.OrderLineItemCreateNestedManyWithoutSelectedMealItemOptionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateNestedManyWithoutSelectedMealItemOptionInput_1.OrderLineItemCreateNestedManyWithoutSelectedMealItemOptionInput)
], MealItemOptionCreateWithoutMealItemInput.prototype, "OrderLineItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MealItemOptionCreateWithoutMealItemInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MealItemOptionCreateWithoutMealItemInput.prototype, "updatedAt", void 0);
MealItemOptionCreateWithoutMealItemInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemOptionCreateWithoutMealItemInput", {
        isAbstract: true
    })
], MealItemOptionCreateWithoutMealItemInput);
exports.MealItemOptionCreateWithoutMealItemInput = MealItemOptionCreateWithoutMealItemInput;
