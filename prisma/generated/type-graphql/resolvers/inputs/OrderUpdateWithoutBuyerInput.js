"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpdateWithoutBuyerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressUpdateOneWithoutOrdersInput_1 = require("../inputs/AddressUpdateOneWithoutOrdersInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumORDER_STATUSFieldUpdateOperationsInput_1 = require("../inputs/EnumORDER_STATUSFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const OrderLineItemUpdateManyWithoutOrderInput_1 = require("../inputs/OrderLineItemUpdateManyWithoutOrderInput");
const ShippingMethodUpdateOneWithoutOrdersInput_1 = require("../inputs/ShippingMethodUpdateOneWithoutOrdersInput");
const UserUpdateOneRequiredWithoutPurchaseOrdersInput_1 = require("../inputs/UserUpdateOneRequiredWithoutPurchaseOrdersInput");
let OrderUpdateWithoutBuyerInput = class OrderUpdateWithoutBuyerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumORDER_STATUSFieldUpdateOperationsInput_1.EnumORDER_STATUSFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumORDER_STATUSFieldUpdateOperationsInput_1.EnumORDER_STATUSFieldUpdateOperationsInput)
], OrderUpdateWithoutBuyerInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressUpdateOneWithoutOrdersInput_1.AddressUpdateOneWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressUpdateOneWithoutOrdersInput_1.AddressUpdateOneWithoutOrdersInput)
], OrderUpdateWithoutBuyerInput.prototype, "SelectedShippingAddress", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodUpdateOneWithoutOrdersInput_1.ShippingMethodUpdateOneWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodUpdateOneWithoutOrdersInput_1.ShippingMethodUpdateOneWithoutOrdersInput)
], OrderUpdateWithoutBuyerInput.prototype, "SelectedShippingMethod", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], OrderUpdateWithoutBuyerInput.prototype, "SelectedPaymentType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], OrderUpdateWithoutBuyerInput.prototype, "stripePaymentReference", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutPurchaseOrdersInput_1.UserUpdateOneRequiredWithoutPurchaseOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutPurchaseOrdersInput_1.UserUpdateOneRequiredWithoutPurchaseOrdersInput)
], OrderUpdateWithoutBuyerInput.prototype, "Seller", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemUpdateManyWithoutOrderInput_1.OrderLineItemUpdateManyWithoutOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemUpdateManyWithoutOrderInput_1.OrderLineItemUpdateManyWithoutOrderInput)
], OrderUpdateWithoutBuyerInput.prototype, "Items", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], OrderUpdateWithoutBuyerInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], OrderUpdateWithoutBuyerInput.prototype, "updatedAt", void 0);
OrderUpdateWithoutBuyerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpdateWithoutBuyerInput", {
        isAbstract: true
    })
], OrderUpdateWithoutBuyerInput);
exports.OrderUpdateWithoutBuyerInput = OrderUpdateWithoutBuyerInput;
