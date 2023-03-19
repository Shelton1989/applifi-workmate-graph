"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemCreateWithoutSelectedMealItemOptionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemCreateNestedOneWithoutOrderLineItemsInput_1 = require("../inputs/MealItemCreateNestedOneWithoutOrderLineItemsInput");
const OrderCreateNestedOneWithoutItemsInput_1 = require("../inputs/OrderCreateNestedOneWithoutItemsInput");
let OrderLineItemCreateWithoutSelectedMealItemOptionInput = class OrderLineItemCreateWithoutSelectedMealItemOptionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemCreateWithoutSelectedMealItemOptionInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemCreateWithoutSelectedMealItemOptionInput.prototype, "details", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemCreateWithoutSelectedMealItemOptionInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemCreateNestedOneWithoutOrderLineItemsInput_1.MealItemCreateNestedOneWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemCreateNestedOneWithoutOrderLineItemsInput_1.MealItemCreateNestedOneWithoutOrderLineItemsInput)
], OrderLineItemCreateWithoutSelectedMealItemOptionInput.prototype, "selectedMealItem", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateNestedOneWithoutItemsInput_1.OrderCreateNestedOneWithoutItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderCreateNestedOneWithoutItemsInput_1.OrderCreateNestedOneWithoutItemsInput)
], OrderLineItemCreateWithoutSelectedMealItemOptionInput.prototype, "Order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderLineItemCreateWithoutSelectedMealItemOptionInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderLineItemCreateWithoutSelectedMealItemOptionInput.prototype, "updatedAt", void 0);
OrderLineItemCreateWithoutSelectedMealItemOptionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemCreateWithoutSelectedMealItemOptionInput", {
        isAbstract: true
    })
], OrderLineItemCreateWithoutSelectedMealItemOptionInput);
exports.OrderLineItemCreateWithoutSelectedMealItemOptionInput = OrderLineItemCreateWithoutSelectedMealItemOptionInput;
