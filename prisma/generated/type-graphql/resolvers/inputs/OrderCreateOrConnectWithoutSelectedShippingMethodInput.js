"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateOrConnectWithoutSelectedShippingMethodInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateWithoutSelectedShippingMethodInput_1 = require("../inputs/OrderCreateWithoutSelectedShippingMethodInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderCreateOrConnectWithoutSelectedShippingMethodInput = class OrderCreateOrConnectWithoutSelectedShippingMethodInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], OrderCreateOrConnectWithoutSelectedShippingMethodInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateWithoutSelectedShippingMethodInput_1.OrderCreateWithoutSelectedShippingMethodInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderCreateWithoutSelectedShippingMethodInput_1.OrderCreateWithoutSelectedShippingMethodInput)
], OrderCreateOrConnectWithoutSelectedShippingMethodInput.prototype, "create", void 0);
OrderCreateOrConnectWithoutSelectedShippingMethodInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateOrConnectWithoutSelectedShippingMethodInput", {
        isAbstract: true
    })
], OrderCreateOrConnectWithoutSelectedShippingMethodInput);
exports.OrderCreateOrConnectWithoutSelectedShippingMethodInput = OrderCreateOrConnectWithoutSelectedShippingMethodInput;
