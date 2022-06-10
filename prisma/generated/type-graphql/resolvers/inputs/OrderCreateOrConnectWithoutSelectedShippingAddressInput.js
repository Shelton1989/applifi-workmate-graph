"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateOrConnectWithoutSelectedShippingAddressInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateWithoutSelectedShippingAddressInput_1 = require("../inputs/OrderCreateWithoutSelectedShippingAddressInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderCreateOrConnectWithoutSelectedShippingAddressInput = class OrderCreateOrConnectWithoutSelectedShippingAddressInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], OrderCreateOrConnectWithoutSelectedShippingAddressInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateWithoutSelectedShippingAddressInput_1.OrderCreateWithoutSelectedShippingAddressInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderCreateWithoutSelectedShippingAddressInput_1.OrderCreateWithoutSelectedShippingAddressInput)
], OrderCreateOrConnectWithoutSelectedShippingAddressInput.prototype, "create", void 0);
OrderCreateOrConnectWithoutSelectedShippingAddressInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateOrConnectWithoutSelectedShippingAddressInput", {
        isAbstract: true
    })
], OrderCreateOrConnectWithoutSelectedShippingAddressInput);
exports.OrderCreateOrConnectWithoutSelectedShippingAddressInput = OrderCreateOrConnectWithoutSelectedShippingAddressInput;
