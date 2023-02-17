"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionCreateWithoutBookingOrderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CurrencyCreateNestedOneWithoutTransactionsInput_1 = require("../inputs/CurrencyCreateNestedOneWithoutTransactionsInput");
const PAYMENT_METHOD_1 = require("../../enums/PAYMENT_METHOD");
const PAYMENT_TYPE_1 = require("../../enums/PAYMENT_TYPE");
let TransactionCreateWithoutBookingOrderInput = class TransactionCreateWithoutBookingOrderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateWithoutBookingOrderInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TransactionCreateWithoutBookingOrderInput.prototype, "amountInLowestDenomination", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyCreateNestedOneWithoutTransactionsInput_1.CurrencyCreateNestedOneWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrencyCreateNestedOneWithoutTransactionsInput_1.CurrencyCreateNestedOneWithoutTransactionsInput)
], TransactionCreateWithoutBookingOrderInput.prototype, "currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateWithoutBookingOrderInput.prototype, "SelectedPaymentType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateWithoutBookingOrderInput.prototype, "stripePaymentReference", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PAYMENT_METHOD_1.PAYMENT_METHOD, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateWithoutBookingOrderInput.prototype, "paymentMethod", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PAYMENT_TYPE_1.PAYMENT_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateWithoutBookingOrderInput.prototype, "paymentType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TransactionCreateWithoutBookingOrderInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TransactionCreateWithoutBookingOrderInput.prototype, "updatedAt", void 0);
TransactionCreateWithoutBookingOrderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionCreateWithoutBookingOrderInput", {
        isAbstract: true
    })
], TransactionCreateWithoutBookingOrderInput);
exports.TransactionCreateWithoutBookingOrderInput = TransactionCreateWithoutBookingOrderInput;
