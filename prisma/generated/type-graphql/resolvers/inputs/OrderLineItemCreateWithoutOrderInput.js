"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemCreateWithoutOrderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemCreateNestedOneWithoutOrderLineItemsInput_1 = require("../inputs/MealItemCreateNestedOneWithoutOrderLineItemsInput");
const MealItemOptionCreateNestedOneWithoutOrderLineItemsInput_1 = require("../inputs/MealItemOptionCreateNestedOneWithoutOrderLineItemsInput");
let OrderLineItemCreateWithoutOrderInput = class OrderLineItemCreateWithoutOrderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemCreateWithoutOrderInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemCreateWithoutOrderInput.prototype, "details", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemCreateWithoutOrderInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemCreateNestedOneWithoutOrderLineItemsInput_1.MealItemCreateNestedOneWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemCreateNestedOneWithoutOrderLineItemsInput_1.MealItemCreateNestedOneWithoutOrderLineItemsInput)
], OrderLineItemCreateWithoutOrderInput.prototype, "selectedMealItem", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionCreateNestedOneWithoutOrderLineItemsInput_1.MealItemOptionCreateNestedOneWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemOptionCreateNestedOneWithoutOrderLineItemsInput_1.MealItemOptionCreateNestedOneWithoutOrderLineItemsInput)
], OrderLineItemCreateWithoutOrderInput.prototype, "selectedMealItemOption", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderLineItemCreateWithoutOrderInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderLineItemCreateWithoutOrderInput.prototype, "updatedAt", void 0);
OrderLineItemCreateWithoutOrderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemCreateWithoutOrderInput", {
        isAbstract: true
    })
], OrderLineItemCreateWithoutOrderInput);
exports.OrderLineItemCreateWithoutOrderInput = OrderLineItemCreateWithoutOrderInput;
