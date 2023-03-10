"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemUpdateManyWithWhereWithoutSelectedMealItemOptionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemScalarWhereInput_1 = require("../inputs/OrderLineItemScalarWhereInput");
const OrderLineItemUpdateManyMutationInput_1 = require("../inputs/OrderLineItemUpdateManyMutationInput");
let OrderLineItemUpdateManyWithWhereWithoutSelectedMealItemOptionInput = class OrderLineItemUpdateManyWithWhereWithoutSelectedMealItemOptionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemScalarWhereInput_1.OrderLineItemScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemScalarWhereInput_1.OrderLineItemScalarWhereInput)
], OrderLineItemUpdateManyWithWhereWithoutSelectedMealItemOptionInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemUpdateManyMutationInput_1.OrderLineItemUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemUpdateManyMutationInput_1.OrderLineItemUpdateManyMutationInput)
], OrderLineItemUpdateManyWithWhereWithoutSelectedMealItemOptionInput.prototype, "data", void 0);
OrderLineItemUpdateManyWithWhereWithoutSelectedMealItemOptionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemUpdateManyWithWhereWithoutSelectedMealItemOptionInput", {
        isAbstract: true
    })
], OrderLineItemUpdateManyWithWhereWithoutSelectedMealItemOptionInput);
exports.OrderLineItemUpdateManyWithWhereWithoutSelectedMealItemOptionInput = OrderLineItemUpdateManyWithWhereWithoutSelectedMealItemOptionInput;
