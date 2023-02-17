"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionUpdateWithoutBookingOrderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CurrencyUpdateOneWithoutTransactionsInput_1 = require("../inputs/CurrencyUpdateOneWithoutTransactionsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumPAYMENT_METHODFieldUpdateOperationsInput_1 = require("../inputs/EnumPAYMENT_METHODFieldUpdateOperationsInput");
const EnumPAYMENT_TYPEFieldUpdateOperationsInput_1 = require("../inputs/EnumPAYMENT_TYPEFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
let TransactionUpdateWithoutBookingOrderInput = class TransactionUpdateWithoutBookingOrderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], TransactionUpdateWithoutBookingOrderInput.prototype, "amountInLowestDenomination", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyUpdateOneWithoutTransactionsInput_1.CurrencyUpdateOneWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrencyUpdateOneWithoutTransactionsInput_1.CurrencyUpdateOneWithoutTransactionsInput)
], TransactionUpdateWithoutBookingOrderInput.prototype, "currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TransactionUpdateWithoutBookingOrderInput.prototype, "SelectedPaymentType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TransactionUpdateWithoutBookingOrderInput.prototype, "stripePaymentReference", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPAYMENT_METHODFieldUpdateOperationsInput_1.EnumPAYMENT_METHODFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPAYMENT_METHODFieldUpdateOperationsInput_1.EnumPAYMENT_METHODFieldUpdateOperationsInput)
], TransactionUpdateWithoutBookingOrderInput.prototype, "paymentMethod", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPAYMENT_TYPEFieldUpdateOperationsInput_1.EnumPAYMENT_TYPEFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPAYMENT_TYPEFieldUpdateOperationsInput_1.EnumPAYMENT_TYPEFieldUpdateOperationsInput)
], TransactionUpdateWithoutBookingOrderInput.prototype, "paymentType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TransactionUpdateWithoutBookingOrderInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TransactionUpdateWithoutBookingOrderInput.prototype, "updatedAt", void 0);
TransactionUpdateWithoutBookingOrderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionUpdateWithoutBookingOrderInput", {
        isAbstract: true
    })
], TransactionUpdateWithoutBookingOrderInput);
exports.TransactionUpdateWithoutBookingOrderInput = TransactionUpdateWithoutBookingOrderInput;
