"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderOrderByWithRelationInput_1 = require("../inputs/BookingOrderOrderByWithRelationInput");
const CurrencyOrderByWithRelationInput_1 = require("../inputs/CurrencyOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TransactionOrderByWithRelationInput = class TransactionOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderOrderByWithRelationInput_1.BookingOrderOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderOrderByWithRelationInput_1.BookingOrderOrderByWithRelationInput)
], TransactionOrderByWithRelationInput.prototype, "BookingOrder", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionOrderByWithRelationInput.prototype, "bookingOrderId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionOrderByWithRelationInput.prototype, "amountInLowestDenomination", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyOrderByWithRelationInput_1.CurrencyOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrencyOrderByWithRelationInput_1.CurrencyOrderByWithRelationInput)
], TransactionOrderByWithRelationInput.prototype, "currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionOrderByWithRelationInput.prototype, "currencyId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionOrderByWithRelationInput.prototype, "SelectedPaymentType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionOrderByWithRelationInput.prototype, "stripePaymentReference", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionOrderByWithRelationInput.prototype, "paymentMethod", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionOrderByWithRelationInput.prototype, "paymentType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionOrderByWithRelationInput.prototype, "updatedAt", void 0);
TransactionOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionOrderByWithRelationInput", {
        isAbstract: true
    })
], TransactionOrderByWithRelationInput);
exports.TransactionOrderByWithRelationInput = TransactionOrderByWithRelationInput;
