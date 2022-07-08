"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressCreateNestedOneWithoutOrdersInput_1 = require("../inputs/AddressCreateNestedOneWithoutOrdersInput");
const OrderLineItemCreateNestedManyWithoutOrderInput_1 = require("../inputs/OrderLineItemCreateNestedManyWithoutOrderInput");
const ShippingMethodCreateNestedOneWithoutOrdersInput_1 = require("../inputs/ShippingMethodCreateNestedOneWithoutOrdersInput");
const UserCreateNestedOneWithoutMyOrdersInput_1 = require("../inputs/UserCreateNestedOneWithoutMyOrdersInput");
const UserCreateNestedOneWithoutPurchaseOrdersInput_1 = require("../inputs/UserCreateNestedOneWithoutPurchaseOrdersInput");
const ORDER_STATUS_1 = require("../../enums/ORDER_STATUS");
let OrderCreateInput = class OrderCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ORDER_STATUS_1.ORDER_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressCreateNestedOneWithoutOrdersInput_1.AddressCreateNestedOneWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressCreateNestedOneWithoutOrdersInput_1.AddressCreateNestedOneWithoutOrdersInput)
], OrderCreateInput.prototype, "SelectedShippingAddress", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodCreateNestedOneWithoutOrdersInput_1.ShippingMethodCreateNestedOneWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodCreateNestedOneWithoutOrdersInput_1.ShippingMethodCreateNestedOneWithoutOrdersInput)
], OrderCreateInput.prototype, "SelectedShippingMethod", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateInput.prototype, "SelectedPaymentType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateInput.prototype, "stripePaymentReference", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutMyOrdersInput_1.UserCreateNestedOneWithoutMyOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutMyOrdersInput_1.UserCreateNestedOneWithoutMyOrdersInput)
], OrderCreateInput.prototype, "Buyer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPurchaseOrdersInput_1.UserCreateNestedOneWithoutPurchaseOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutPurchaseOrdersInput_1.UserCreateNestedOneWithoutPurchaseOrdersInput)
], OrderCreateInput.prototype, "Seller", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateNestedManyWithoutOrderInput_1.OrderLineItemCreateNestedManyWithoutOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateNestedManyWithoutOrderInput_1.OrderLineItemCreateNestedManyWithoutOrderInput)
], OrderCreateInput.prototype, "Items", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderCreateInput.prototype, "updatedAt", void 0);
OrderCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateInput", {
        isAbstract: true
    })
], OrderCreateInput);
exports.OrderCreateInput = OrderCreateInput;
