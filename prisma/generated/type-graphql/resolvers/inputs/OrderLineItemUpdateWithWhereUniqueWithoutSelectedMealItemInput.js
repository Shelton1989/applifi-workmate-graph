"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemUpdateWithWhereUniqueWithoutSelectedMealItemInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemUpdateWithoutSelectedMealItemInput_1 = require("../inputs/OrderLineItemUpdateWithoutSelectedMealItemInput");
const OrderLineItemWhereUniqueInput_1 = require("../inputs/OrderLineItemWhereUniqueInput");
let OrderLineItemUpdateWithWhereUniqueWithoutSelectedMealItemInput = class OrderLineItemUpdateWithWhereUniqueWithoutSelectedMealItemInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput)
], OrderLineItemUpdateWithWhereUniqueWithoutSelectedMealItemInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemUpdateWithoutSelectedMealItemInput_1.OrderLineItemUpdateWithoutSelectedMealItemInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemUpdateWithoutSelectedMealItemInput_1.OrderLineItemUpdateWithoutSelectedMealItemInput)
], OrderLineItemUpdateWithWhereUniqueWithoutSelectedMealItemInput.prototype, "data", void 0);
OrderLineItemUpdateWithWhereUniqueWithoutSelectedMealItemInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemUpdateWithWhereUniqueWithoutSelectedMealItemInput", {
        isAbstract: true
    })
], OrderLineItemUpdateWithWhereUniqueWithoutSelectedMealItemInput);
exports.OrderLineItemUpdateWithWhereUniqueWithoutSelectedMealItemInput = OrderLineItemUpdateWithWhereUniqueWithoutSelectedMealItemInput;
