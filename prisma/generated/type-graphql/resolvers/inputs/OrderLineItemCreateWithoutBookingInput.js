"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemCreateWithoutBookingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemCreateNestedOneWithoutOrderLineItemsInput_1 = require("../inputs/MealItemCreateNestedOneWithoutOrderLineItemsInput");
const MealItemOptionCreateNestedOneWithoutOrderLineItemsInput_1 = require("../inputs/MealItemOptionCreateNestedOneWithoutOrderLineItemsInput");
let OrderLineItemCreateWithoutBookingInput = class OrderLineItemCreateWithoutBookingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemCreateWithoutBookingInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemCreateWithoutBookingInput.prototype, "details", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemCreateWithoutBookingInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemCreateNestedOneWithoutOrderLineItemsInput_1.MealItemCreateNestedOneWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemCreateNestedOneWithoutOrderLineItemsInput_1.MealItemCreateNestedOneWithoutOrderLineItemsInput)
], OrderLineItemCreateWithoutBookingInput.prototype, "selectedMealItem", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionCreateNestedOneWithoutOrderLineItemsInput_1.MealItemOptionCreateNestedOneWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemOptionCreateNestedOneWithoutOrderLineItemsInput_1.MealItemOptionCreateNestedOneWithoutOrderLineItemsInput)
], OrderLineItemCreateWithoutBookingInput.prototype, "selectedMealItemOption", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderLineItemCreateWithoutBookingInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderLineItemCreateWithoutBookingInput.prototype, "updatedAt", void 0);
OrderLineItemCreateWithoutBookingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemCreateWithoutBookingInput", {
        isAbstract: true
    })
], OrderLineItemCreateWithoutBookingInput);
exports.OrderLineItemCreateWithoutBookingInput = OrderLineItemCreateWithoutBookingInput;
