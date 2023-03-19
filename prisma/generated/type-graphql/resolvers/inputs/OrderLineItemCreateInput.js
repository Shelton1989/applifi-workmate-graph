"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemCreateNestedOneWithoutOrderLineItemsInput_1 = require("../inputs/MealItemCreateNestedOneWithoutOrderLineItemsInput");
const MealItemOptionCreateNestedOneWithoutOrderLineItemsInput_1 = require("../inputs/MealItemOptionCreateNestedOneWithoutOrderLineItemsInput");
const OrderCreateNestedOneWithoutItemsInput_1 = require("../inputs/OrderCreateNestedOneWithoutItemsInput");
let OrderLineItemCreateInput = class OrderLineItemCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemCreateInput.prototype, "details", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemCreateInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemCreateNestedOneWithoutOrderLineItemsInput_1.MealItemCreateNestedOneWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemCreateNestedOneWithoutOrderLineItemsInput_1.MealItemCreateNestedOneWithoutOrderLineItemsInput)
], OrderLineItemCreateInput.prototype, "selectedMealItem", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionCreateNestedOneWithoutOrderLineItemsInput_1.MealItemOptionCreateNestedOneWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemOptionCreateNestedOneWithoutOrderLineItemsInput_1.MealItemOptionCreateNestedOneWithoutOrderLineItemsInput)
], OrderLineItemCreateInput.prototype, "selectedMealItemOption", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateNestedOneWithoutItemsInput_1.OrderCreateNestedOneWithoutItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderCreateNestedOneWithoutItemsInput_1.OrderCreateNestedOneWithoutItemsInput)
], OrderLineItemCreateInput.prototype, "Order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderLineItemCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderLineItemCreateInput.prototype, "updatedAt", void 0);
OrderLineItemCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemCreateInput", {
        isAbstract: true
    })
], OrderLineItemCreateInput);
exports.OrderLineItemCreateInput = OrderLineItemCreateInput;
