"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderCreateNestedOneWithoutTransactionsInput_1 = require("../inputs/BookingOrderCreateNestedOneWithoutTransactionsInput");
const CurrencyCreateNestedOneWithoutTransactionsInput_1 = require("../inputs/CurrencyCreateNestedOneWithoutTransactionsInput");
const PAYMENT_METHOD_1 = require("../../enums/PAYMENT_METHOD");
const PAYMENT_TYPE_1 = require("../../enums/PAYMENT_TYPE");
let TransactionCreateInput = class TransactionCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderCreateNestedOneWithoutTransactionsInput_1.BookingOrderCreateNestedOneWithoutTransactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderCreateNestedOneWithoutTransactionsInput_1.BookingOrderCreateNestedOneWithoutTransactionsInput)
], TransactionCreateInput.prototype, "BookingOrder", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TransactionCreateInput.prototype, "amountInLowestDenomination", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyCreateNestedOneWithoutTransactionsInput_1.CurrencyCreateNestedOneWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrencyCreateNestedOneWithoutTransactionsInput_1.CurrencyCreateNestedOneWithoutTransactionsInput)
], TransactionCreateInput.prototype, "currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateInput.prototype, "SelectedPaymentType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateInput.prototype, "stripePaymentReference", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PAYMENT_METHOD_1.PAYMENT_METHOD, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateInput.prototype, "paymentMethod", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PAYMENT_TYPE_1.PAYMENT_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateInput.prototype, "paymentType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TransactionCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TransactionCreateInput.prototype, "updatedAt", void 0);
TransactionCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionCreateInput", {
        isAbstract: true
    })
], TransactionCreateInput);
exports.TransactionCreateInput = TransactionCreateInput;
