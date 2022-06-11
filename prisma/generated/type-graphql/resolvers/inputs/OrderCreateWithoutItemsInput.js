"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateWithoutItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressCreateNestedOneWithoutOrdersInput_1 = require("../inputs/AddressCreateNestedOneWithoutOrdersInput");
const ShippingMethodCreateNestedOneWithoutOrdersInput_1 = require("../inputs/ShippingMethodCreateNestedOneWithoutOrdersInput");
const UserCreateNestedOneWithoutOrderInput_1 = require("../inputs/UserCreateNestedOneWithoutOrderInput");
const ORDER_STATUS_1 = require("../../enums/ORDER_STATUS");
let OrderCreateWithoutItemsInput = class OrderCreateWithoutItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateWithoutItemsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ORDER_STATUS_1.ORDER_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateWithoutItemsInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressCreateNestedOneWithoutOrdersInput_1.AddressCreateNestedOneWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressCreateNestedOneWithoutOrdersInput_1.AddressCreateNestedOneWithoutOrdersInput)
], OrderCreateWithoutItemsInput.prototype, "SelectedShippingAddress", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodCreateNestedOneWithoutOrdersInput_1.ShippingMethodCreateNestedOneWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodCreateNestedOneWithoutOrdersInput_1.ShippingMethodCreateNestedOneWithoutOrdersInput)
], OrderCreateWithoutItemsInput.prototype, "SelectedShippingMethod", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateWithoutItemsInput.prototype, "SelectedPaymentType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateWithoutItemsInput.prototype, "stripePaymentReference", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutOrderInput_1.UserCreateNestedOneWithoutOrderInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutOrderInput_1.UserCreateNestedOneWithoutOrderInput)
], OrderCreateWithoutItemsInput.prototype, "User", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderCreateWithoutItemsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderCreateWithoutItemsInput.prototype, "updatedAt", void 0);
OrderCreateWithoutItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateWithoutItemsInput", {
        isAbstract: true
    })
], OrderCreateWithoutItemsInput);
exports.OrderCreateWithoutItemsInput = OrderCreateWithoutItemsInput;
