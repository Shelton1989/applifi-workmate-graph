"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemCreateOrConnectWithoutLineItemPriceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateWithoutLineItemPriceInput_1 = require("../inputs/OrderLineItemCreateWithoutLineItemPriceInput");
const OrderLineItemWhereUniqueInput_1 = require("../inputs/OrderLineItemWhereUniqueInput");
let OrderLineItemCreateOrConnectWithoutLineItemPriceInput = class OrderLineItemCreateOrConnectWithoutLineItemPriceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput)
], OrderLineItemCreateOrConnectWithoutLineItemPriceInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateWithoutLineItemPriceInput_1.OrderLineItemCreateWithoutLineItemPriceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateWithoutLineItemPriceInput_1.OrderLineItemCreateWithoutLineItemPriceInput)
], OrderLineItemCreateOrConnectWithoutLineItemPriceInput.prototype, "create", void 0);
OrderLineItemCreateOrConnectWithoutLineItemPriceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemCreateOrConnectWithoutLineItemPriceInput", {
        isAbstract: true
    })
], OrderLineItemCreateOrConnectWithoutLineItemPriceInput);
exports.OrderLineItemCreateOrConnectWithoutLineItemPriceInput = OrderLineItemCreateOrConnectWithoutLineItemPriceInput;
