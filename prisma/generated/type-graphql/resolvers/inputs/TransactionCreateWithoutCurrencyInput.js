"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionCreateWithoutCurrencyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderCreateNestedOneWithoutTransactionsInput_1 = require("../inputs/BookingOrderCreateNestedOneWithoutTransactionsInput");
const PAYMENT_METHOD_1 = require("../../enums/PAYMENT_METHOD");
const PAYMENT_TYPE_1 = require("../../enums/PAYMENT_TYPE");
let TransactionCreateWithoutCurrencyInput = class TransactionCreateWithoutCurrencyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateWithoutCurrencyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderCreateNestedOneWithoutTransactionsInput_1.BookingOrderCreateNestedOneWithoutTransactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderCreateNestedOneWithoutTransactionsInput_1.BookingOrderCreateNestedOneWithoutTransactionsInput)
], TransactionCreateWithoutCurrencyInput.prototype, "BookingOrder", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TransactionCreateWithoutCurrencyInput.prototype, "amountInLowestDenomination", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateWithoutCurrencyInput.prototype, "SelectedPaymentType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateWithoutCurrencyInput.prototype, "stripePaymentReference", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PAYMENT_METHOD_1.PAYMENT_METHOD, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateWithoutCurrencyInput.prototype, "paymentMethod", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PAYMENT_TYPE_1.PAYMENT_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateWithoutCurrencyInput.prototype, "paymentType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TransactionCreateWithoutCurrencyInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TransactionCreateWithoutCurrencyInput.prototype, "updatedAt", void 0);
TransactionCreateWithoutCurrencyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionCreateWithoutCurrencyInput", {
        isAbstract: true
    })
], TransactionCreateWithoutCurrencyInput);
exports.TransactionCreateWithoutCurrencyInput = TransactionCreateWithoutCurrencyInput;
