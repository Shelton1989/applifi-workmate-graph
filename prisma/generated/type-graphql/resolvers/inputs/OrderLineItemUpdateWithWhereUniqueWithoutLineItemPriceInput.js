"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemUpdateWithWhereUniqueWithoutLineItemPriceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemUpdateWithoutLineItemPriceInput_1 = require("../inputs/OrderLineItemUpdateWithoutLineItemPriceInput");
const OrderLineItemWhereUniqueInput_1 = require("../inputs/OrderLineItemWhereUniqueInput");
let OrderLineItemUpdateWithWhereUniqueWithoutLineItemPriceInput = class OrderLineItemUpdateWithWhereUniqueWithoutLineItemPriceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput)
], OrderLineItemUpdateWithWhereUniqueWithoutLineItemPriceInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemUpdateWithoutLineItemPriceInput_1.OrderLineItemUpdateWithoutLineItemPriceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemUpdateWithoutLineItemPriceInput_1.OrderLineItemUpdateWithoutLineItemPriceInput)
], OrderLineItemUpdateWithWhereUniqueWithoutLineItemPriceInput.prototype, "data", void 0);
OrderLineItemUpdateWithWhereUniqueWithoutLineItemPriceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemUpdateWithWhereUniqueWithoutLineItemPriceInput", {
        isAbstract: true
    })
], OrderLineItemUpdateWithWhereUniqueWithoutLineItemPriceInput);
exports.OrderLineItemUpdateWithWhereUniqueWithoutLineItemPriceInput = OrderLineItemUpdateWithWhereUniqueWithoutLineItemPriceInput;
