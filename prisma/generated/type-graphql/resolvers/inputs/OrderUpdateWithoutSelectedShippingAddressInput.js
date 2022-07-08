"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpdateWithoutSelectedShippingAddressInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumORDER_STATUSFieldUpdateOperationsInput_1 = require("../inputs/EnumORDER_STATUSFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const OrderLineItemUpdateManyWithoutOrderInput_1 = require("../inputs/OrderLineItemUpdateManyWithoutOrderInput");
const ShippingMethodUpdateOneWithoutOrdersInput_1 = require("../inputs/ShippingMethodUpdateOneWithoutOrdersInput");
const UserUpdateOneRequiredWithoutMyOrdersInput_1 = require("../inputs/UserUpdateOneRequiredWithoutMyOrdersInput");
const UserUpdateOneRequiredWithoutPurchaseOrdersInput_1 = require("../inputs/UserUpdateOneRequiredWithoutPurchaseOrdersInput");
let OrderUpdateWithoutSelectedShippingAddressInput = class OrderUpdateWithoutSelectedShippingAddressInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumORDER_STATUSFieldUpdateOperationsInput_1.EnumORDER_STATUSFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumORDER_STATUSFieldUpdateOperationsInput_1.EnumORDER_STATUSFieldUpdateOperationsInput)
], OrderUpdateWithoutSelectedShippingAddressInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodUpdateOneWithoutOrdersInput_1.ShippingMethodUpdateOneWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodUpdateOneWithoutOrdersInput_1.ShippingMethodUpdateOneWithoutOrdersInput)
], OrderUpdateWithoutSelectedShippingAddressInput.prototype, "SelectedShippingMethod", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], OrderUpdateWithoutSelectedShippingAddressInput.prototype, "SelectedPaymentType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], OrderUpdateWithoutSelectedShippingAddressInput.prototype, "stripePaymentReference", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutMyOrdersInput_1.UserUpdateOneRequiredWithoutMyOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutMyOrdersInput_1.UserUpdateOneRequiredWithoutMyOrdersInput)
], OrderUpdateWithoutSelectedShippingAddressInput.prototype, "Buyer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutPurchaseOrdersInput_1.UserUpdateOneRequiredWithoutPurchaseOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutPurchaseOrdersInput_1.UserUpdateOneRequiredWithoutPurchaseOrdersInput)
], OrderUpdateWithoutSelectedShippingAddressInput.prototype, "Seller", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemUpdateManyWithoutOrderInput_1.OrderLineItemUpdateManyWithoutOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemUpdateManyWithoutOrderInput_1.OrderLineItemUpdateManyWithoutOrderInput)
], OrderUpdateWithoutSelectedShippingAddressInput.prototype, "Items", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], OrderUpdateWithoutSelectedShippingAddressInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], OrderUpdateWithoutSelectedShippingAddressInput.prototype, "updatedAt", void 0);
OrderUpdateWithoutSelectedShippingAddressInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpdateWithoutSelectedShippingAddressInput", {
        isAbstract: true
    })
], OrderUpdateWithoutSelectedShippingAddressInput);
exports.OrderUpdateWithoutSelectedShippingAddressInput = OrderUpdateWithoutSelectedShippingAddressInput;
