"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemUpdateWithWhereUniqueWithoutSelectedMealItemOptionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemUpdateWithoutSelectedMealItemOptionInput_1 = require("../inputs/OrderLineItemUpdateWithoutSelectedMealItemOptionInput");
const OrderLineItemWhereUniqueInput_1 = require("../inputs/OrderLineItemWhereUniqueInput");
let OrderLineItemUpdateWithWhereUniqueWithoutSelectedMealItemOptionInput = class OrderLineItemUpdateWithWhereUniqueWithoutSelectedMealItemOptionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput)
], OrderLineItemUpdateWithWhereUniqueWithoutSelectedMealItemOptionInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemUpdateWithoutSelectedMealItemOptionInput_1.OrderLineItemUpdateWithoutSelectedMealItemOptionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemUpdateWithoutSelectedMealItemOptionInput_1.OrderLineItemUpdateWithoutSelectedMealItemOptionInput)
], OrderLineItemUpdateWithWhereUniqueWithoutSelectedMealItemOptionInput.prototype, "data", void 0);
OrderLineItemUpdateWithWhereUniqueWithoutSelectedMealItemOptionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemUpdateWithWhereUniqueWithoutSelectedMealItemOptionInput", {
        isAbstract: true
    })
], OrderLineItemUpdateWithWhereUniqueWithoutSelectedMealItemOptionInput);
exports.OrderLineItemUpdateWithWhereUniqueWithoutSelectedMealItemOptionInput = OrderLineItemUpdateWithWhereUniqueWithoutSelectedMealItemOptionInput;
