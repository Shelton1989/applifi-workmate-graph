"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemUpdateWithWhereUniqueWithoutSelectedProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemUpdateWithoutSelectedProductInput_1 = require("../inputs/OrderLineItemUpdateWithoutSelectedProductInput");
const OrderLineItemWhereUniqueInput_1 = require("../inputs/OrderLineItemWhereUniqueInput");
let OrderLineItemUpdateWithWhereUniqueWithoutSelectedProductInput = class OrderLineItemUpdateWithWhereUniqueWithoutSelectedProductInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput)
], OrderLineItemUpdateWithWhereUniqueWithoutSelectedProductInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemUpdateWithoutSelectedProductInput_1.OrderLineItemUpdateWithoutSelectedProductInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemUpdateWithoutSelectedProductInput_1.OrderLineItemUpdateWithoutSelectedProductInput)
], OrderLineItemUpdateWithWhereUniqueWithoutSelectedProductInput.prototype, "data", void 0);
OrderLineItemUpdateWithWhereUniqueWithoutSelectedProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemUpdateWithWhereUniqueWithoutSelectedProductInput", {
        isAbstract: true
    })
], OrderLineItemUpdateWithWhereUniqueWithoutSelectedProductInput);
exports.OrderLineItemUpdateWithWhereUniqueWithoutSelectedProductInput = OrderLineItemUpdateWithWhereUniqueWithoutSelectedProductInput;
