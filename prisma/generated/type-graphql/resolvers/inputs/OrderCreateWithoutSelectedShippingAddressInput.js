"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateWithoutSelectedShippingAddressInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateNestedManyWithoutOrderInput_1 = require("../inputs/OrderLineItemCreateNestedManyWithoutOrderInput");
const ShippingMethodCreateNestedOneWithoutOrdersInput_1 = require("../inputs/ShippingMethodCreateNestedOneWithoutOrdersInput");
const UserCreateNestedOneWithoutMyOrdersInput_1 = require("../inputs/UserCreateNestedOneWithoutMyOrdersInput");
const UserCreateNestedOneWithoutPurchaseOrdersInput_1 = require("../inputs/UserCreateNestedOneWithoutPurchaseOrdersInput");
const ORDER_STATUS_1 = require("../../enums/ORDER_STATUS");
let OrderCreateWithoutSelectedShippingAddressInput = class OrderCreateWithoutSelectedShippingAddressInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateWithoutSelectedShippingAddressInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ORDER_STATUS_1.ORDER_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateWithoutSelectedShippingAddressInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodCreateNestedOneWithoutOrdersInput_1.ShippingMethodCreateNestedOneWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodCreateNestedOneWithoutOrdersInput_1.ShippingMethodCreateNestedOneWithoutOrdersInput)
], OrderCreateWithoutSelectedShippingAddressInput.prototype, "SelectedShippingMethod", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateWithoutSelectedShippingAddressInput.prototype, "SelectedPaymentType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateWithoutSelectedShippingAddressInput.prototype, "stripePaymentReference", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutMyOrdersInput_1.UserCreateNestedOneWithoutMyOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutMyOrdersInput_1.UserCreateNestedOneWithoutMyOrdersInput)
], OrderCreateWithoutSelectedShippingAddressInput.prototype, "Buyer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPurchaseOrdersInput_1.UserCreateNestedOneWithoutPurchaseOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutPurchaseOrdersInput_1.UserCreateNestedOneWithoutPurchaseOrdersInput)
], OrderCreateWithoutSelectedShippingAddressInput.prototype, "Seller", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateNestedManyWithoutOrderInput_1.OrderLineItemCreateNestedManyWithoutOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateNestedManyWithoutOrderInput_1.OrderLineItemCreateNestedManyWithoutOrderInput)
], OrderCreateWithoutSelectedShippingAddressInput.prototype, "Items", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderCreateWithoutSelectedShippingAddressInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderCreateWithoutSelectedShippingAddressInput.prototype, "updatedAt", void 0);
OrderCreateWithoutSelectedShippingAddressInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateWithoutSelectedShippingAddressInput", {
        isAbstract: true
    })
], OrderCreateWithoutSelectedShippingAddressInput);
exports.OrderCreateWithoutSelectedShippingAddressInput = OrderCreateWithoutSelectedShippingAddressInput;
