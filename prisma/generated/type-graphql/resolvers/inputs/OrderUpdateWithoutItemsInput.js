"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpdateWithoutItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressUpdateOneWithoutOrdersInput_1 = require("../inputs/AddressUpdateOneWithoutOrdersInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumORDER_STATUSFieldUpdateOperationsInput_1 = require("../inputs/EnumORDER_STATUSFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const ShippingMethodUpdateOneWithoutOrdersInput_1 = require("../inputs/ShippingMethodUpdateOneWithoutOrdersInput");
const UserUpdateOneRequiredWithoutMyOrdersInput_1 = require("../inputs/UserUpdateOneRequiredWithoutMyOrdersInput");
const UserUpdateOneRequiredWithoutPurchaseOrdersInput_1 = require("../inputs/UserUpdateOneRequiredWithoutPurchaseOrdersInput");
let OrderUpdateWithoutItemsInput = class OrderUpdateWithoutItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumORDER_STATUSFieldUpdateOperationsInput_1.EnumORDER_STATUSFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumORDER_STATUSFieldUpdateOperationsInput_1.EnumORDER_STATUSFieldUpdateOperationsInput)
], OrderUpdateWithoutItemsInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressUpdateOneWithoutOrdersInput_1.AddressUpdateOneWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressUpdateOneWithoutOrdersInput_1.AddressUpdateOneWithoutOrdersInput)
], OrderUpdateWithoutItemsInput.prototype, "SelectedShippingAddress", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodUpdateOneWithoutOrdersInput_1.ShippingMethodUpdateOneWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodUpdateOneWithoutOrdersInput_1.ShippingMethodUpdateOneWithoutOrdersInput)
], OrderUpdateWithoutItemsInput.prototype, "SelectedShippingMethod", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], OrderUpdateWithoutItemsInput.prototype, "SelectedPaymentType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], OrderUpdateWithoutItemsInput.prototype, "stripePaymentReference", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutMyOrdersInput_1.UserUpdateOneRequiredWithoutMyOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutMyOrdersInput_1.UserUpdateOneRequiredWithoutMyOrdersInput)
], OrderUpdateWithoutItemsInput.prototype, "Buyer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutPurchaseOrdersInput_1.UserUpdateOneRequiredWithoutPurchaseOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutPurchaseOrdersInput_1.UserUpdateOneRequiredWithoutPurchaseOrdersInput)
], OrderUpdateWithoutItemsInput.prototype, "Seller", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], OrderUpdateWithoutItemsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], OrderUpdateWithoutItemsInput.prototype, "updatedAt", void 0);
OrderUpdateWithoutItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpdateWithoutItemsInput", {
        isAbstract: true
    })
], OrderUpdateWithoutItemsInput);
exports.OrderUpdateWithoutItemsInput = OrderUpdateWithoutItemsInput;
