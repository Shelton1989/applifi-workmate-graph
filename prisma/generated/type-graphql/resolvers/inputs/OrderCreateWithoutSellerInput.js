"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateWithoutSellerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressCreateNestedOneWithoutOrdersInput_1 = require("../inputs/AddressCreateNestedOneWithoutOrdersInput");
const OrderLineItemCreateNestedManyWithoutOrderInput_1 = require("../inputs/OrderLineItemCreateNestedManyWithoutOrderInput");
const ShippingMethodCreateNestedOneWithoutOrdersInput_1 = require("../inputs/ShippingMethodCreateNestedOneWithoutOrdersInput");
const UserCreateNestedOneWithoutMyOrdersInput_1 = require("../inputs/UserCreateNestedOneWithoutMyOrdersInput");
const ORDER_STATUS_1 = require("../../enums/ORDER_STATUS");
let OrderCreateWithoutSellerInput = class OrderCreateWithoutSellerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateWithoutSellerInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ORDER_STATUS_1.ORDER_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateWithoutSellerInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressCreateNestedOneWithoutOrdersInput_1.AddressCreateNestedOneWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressCreateNestedOneWithoutOrdersInput_1.AddressCreateNestedOneWithoutOrdersInput)
], OrderCreateWithoutSellerInput.prototype, "SelectedShippingAddress", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodCreateNestedOneWithoutOrdersInput_1.ShippingMethodCreateNestedOneWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodCreateNestedOneWithoutOrdersInput_1.ShippingMethodCreateNestedOneWithoutOrdersInput)
], OrderCreateWithoutSellerInput.prototype, "SelectedShippingMethod", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateWithoutSellerInput.prototype, "SelectedPaymentType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateWithoutSellerInput.prototype, "stripePaymentReference", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutMyOrdersInput_1.UserCreateNestedOneWithoutMyOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutMyOrdersInput_1.UserCreateNestedOneWithoutMyOrdersInput)
], OrderCreateWithoutSellerInput.prototype, "Buyer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateNestedManyWithoutOrderInput_1.OrderLineItemCreateNestedManyWithoutOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateNestedManyWithoutOrderInput_1.OrderLineItemCreateNestedManyWithoutOrderInput)
], OrderCreateWithoutSellerInput.prototype, "Items", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderCreateWithoutSellerInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderCreateWithoutSellerInput.prototype, "updatedAt", void 0);
OrderCreateWithoutSellerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateWithoutSellerInput", {
        isAbstract: true
    })
], OrderCreateWithoutSellerInput);
exports.OrderCreateWithoutSellerInput = OrderCreateWithoutSellerInput;
