"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemUpdateWithWhereUniqueWithoutSelectedSizeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemUpdateWithoutSelectedSizeInput_1 = require("../inputs/OrderLineItemUpdateWithoutSelectedSizeInput");
const OrderLineItemWhereUniqueInput_1 = require("../inputs/OrderLineItemWhereUniqueInput");
let OrderLineItemUpdateWithWhereUniqueWithoutSelectedSizeInput = class OrderLineItemUpdateWithWhereUniqueWithoutSelectedSizeInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput)
], OrderLineItemUpdateWithWhereUniqueWithoutSelectedSizeInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemUpdateWithoutSelectedSizeInput_1.OrderLineItemUpdateWithoutSelectedSizeInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemUpdateWithoutSelectedSizeInput_1.OrderLineItemUpdateWithoutSelectedSizeInput)
], OrderLineItemUpdateWithWhereUniqueWithoutSelectedSizeInput.prototype, "data", void 0);
OrderLineItemUpdateWithWhereUniqueWithoutSelectedSizeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemUpdateWithWhereUniqueWithoutSelectedSizeInput", {
        isAbstract: true
    })
], OrderLineItemUpdateWithWhereUniqueWithoutSelectedSizeInput);
exports.OrderLineItemUpdateWithWhereUniqueWithoutSelectedSizeInput = OrderLineItemUpdateWithWhereUniqueWithoutSelectedSizeInput;
