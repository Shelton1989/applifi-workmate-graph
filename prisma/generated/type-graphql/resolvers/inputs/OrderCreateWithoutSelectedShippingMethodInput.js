"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateWithoutSelectedShippingMethodInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressCreateNestedOneWithoutOrdersInput_1 = require("../inputs/AddressCreateNestedOneWithoutOrdersInput");
const OrderLineItemCreateNestedManyWithoutOrderInput_1 = require("../inputs/OrderLineItemCreateNestedManyWithoutOrderInput");
const UserCreateNestedOneWithoutMyOrdersInput_1 = require("../inputs/UserCreateNestedOneWithoutMyOrdersInput");
const UserCreateNestedOneWithoutPurchaseOrdersInput_1 = require("../inputs/UserCreateNestedOneWithoutPurchaseOrdersInput");
const ORDER_STATUS_1 = require("../../enums/ORDER_STATUS");
let OrderCreateWithoutSelectedShippingMethodInput = class OrderCreateWithoutSelectedShippingMethodInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateWithoutSelectedShippingMethodInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ORDER_STATUS_1.ORDER_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateWithoutSelectedShippingMethodInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressCreateNestedOneWithoutOrdersInput_1.AddressCreateNestedOneWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressCreateNestedOneWithoutOrdersInput_1.AddressCreateNestedOneWithoutOrdersInput)
], OrderCreateWithoutSelectedShippingMethodInput.prototype, "SelectedShippingAddress", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateWithoutSelectedShippingMethodInput.prototype, "SelectedPaymentType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateWithoutSelectedShippingMethodInput.prototype, "stripePaymentReference", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutMyOrdersInput_1.UserCreateNestedOneWithoutMyOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutMyOrdersInput_1.UserCreateNestedOneWithoutMyOrdersInput)
], OrderCreateWithoutSelectedShippingMethodInput.prototype, "Buyer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPurchaseOrdersInput_1.UserCreateNestedOneWithoutPurchaseOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutPurchaseOrdersInput_1.UserCreateNestedOneWithoutPurchaseOrdersInput)
], OrderCreateWithoutSelectedShippingMethodInput.prototype, "Seller", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateNestedManyWithoutOrderInput_1.OrderLineItemCreateNestedManyWithoutOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateNestedManyWithoutOrderInput_1.OrderLineItemCreateNestedManyWithoutOrderInput)
], OrderCreateWithoutSelectedShippingMethodInput.prototype, "Items", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderCreateWithoutSelectedShippingMethodInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderCreateWithoutSelectedShippingMethodInput.prototype, "updatedAt", void 0);
OrderCreateWithoutSelectedShippingMethodInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateWithoutSelectedShippingMethodInput", {
        isAbstract: true
    })
], OrderCreateWithoutSelectedShippingMethodInput);
exports.OrderCreateWithoutSelectedShippingMethodInput = OrderCreateWithoutSelectedShippingMethodInput;
