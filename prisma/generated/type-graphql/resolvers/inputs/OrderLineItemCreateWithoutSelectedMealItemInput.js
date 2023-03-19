"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemCreateWithoutSelectedMealItemInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemOptionCreateNestedOneWithoutOrderLineItemsInput_1 = require("../inputs/MealItemOptionCreateNestedOneWithoutOrderLineItemsInput");
const OrderCreateNestedOneWithoutItemsInput_1 = require("../inputs/OrderCreateNestedOneWithoutItemsInput");
let OrderLineItemCreateWithoutSelectedMealItemInput = class OrderLineItemCreateWithoutSelectedMealItemInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemCreateWithoutSelectedMealItemInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemCreateWithoutSelectedMealItemInput.prototype, "details", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemCreateWithoutSelectedMealItemInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionCreateNestedOneWithoutOrderLineItemsInput_1.MealItemOptionCreateNestedOneWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemOptionCreateNestedOneWithoutOrderLineItemsInput_1.MealItemOptionCreateNestedOneWithoutOrderLineItemsInput)
], OrderLineItemCreateWithoutSelectedMealItemInput.prototype, "selectedMealItemOption", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateNestedOneWithoutItemsInput_1.OrderCreateNestedOneWithoutItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderCreateNestedOneWithoutItemsInput_1.OrderCreateNestedOneWithoutItemsInput)
], OrderLineItemCreateWithoutSelectedMealItemInput.prototype, "Order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderLineItemCreateWithoutSelectedMealItemInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderLineItemCreateWithoutSelectedMealItemInput.prototype, "updatedAt", void 0);
OrderLineItemCreateWithoutSelectedMealItemInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemCreateWithoutSelectedMealItemInput", {
        isAbstract: true
    })
], OrderLineItemCreateWithoutSelectedMealItemInput);
exports.OrderLineItemCreateWithoutSelectedMealItemInput = OrderLineItemCreateWithoutSelectedMealItemInput;
