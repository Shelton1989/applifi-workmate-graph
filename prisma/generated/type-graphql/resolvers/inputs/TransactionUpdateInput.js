"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderUpdateOneRequiredWithoutTransactionsInput_1 = require("../inputs/BookingOrderUpdateOneRequiredWithoutTransactionsInput");
const CurrencyUpdateOneWithoutTransactionsInput_1 = require("../inputs/CurrencyUpdateOneWithoutTransactionsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumPAYMENT_METHODFieldUpdateOperationsInput_1 = require("../inputs/EnumPAYMENT_METHODFieldUpdateOperationsInput");
const EnumPAYMENT_TYPEFieldUpdateOperationsInput_1 = require("../inputs/EnumPAYMENT_TYPEFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
let TransactionUpdateInput = class TransactionUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderUpdateOneRequiredWithoutTransactionsInput_1.BookingOrderUpdateOneRequiredWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderUpdateOneRequiredWithoutTransactionsInput_1.BookingOrderUpdateOneRequiredWithoutTransactionsInput)
], TransactionUpdateInput.prototype, "BookingOrder", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], TransactionUpdateInput.prototype, "amountInLowestDenomination", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyUpdateOneWithoutTransactionsInput_1.CurrencyUpdateOneWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrencyUpdateOneWithoutTransactionsInput_1.CurrencyUpdateOneWithoutTransactionsInput)
], TransactionUpdateInput.prototype, "currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TransactionUpdateInput.prototype, "SelectedPaymentType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TransactionUpdateInput.prototype, "stripePaymentReference", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPAYMENT_METHODFieldUpdateOperationsInput_1.EnumPAYMENT_METHODFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPAYMENT_METHODFieldUpdateOperationsInput_1.EnumPAYMENT_METHODFieldUpdateOperationsInput)
], TransactionUpdateInput.prototype, "paymentMethod", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPAYMENT_TYPEFieldUpdateOperationsInput_1.EnumPAYMENT_TYPEFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPAYMENT_TYPEFieldUpdateOperationsInput_1.EnumPAYMENT_TYPEFieldUpdateOperationsInput)
], TransactionUpdateInput.prototype, "paymentType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TransactionUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TransactionUpdateInput.prototype, "updatedAt", void 0);
TransactionUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionUpdateInput", {
        isAbstract: true
    })
], TransactionUpdateInput);
exports.TransactionUpdateInput = TransactionUpdateInput;
