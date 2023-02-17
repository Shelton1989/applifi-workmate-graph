"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionAvgAggregate_1 = require("../outputs/TransactionAvgAggregate");
const TransactionCountAggregate_1 = require("../outputs/TransactionCountAggregate");
const TransactionMaxAggregate_1 = require("../outputs/TransactionMaxAggregate");
const TransactionMinAggregate_1 = require("../outputs/TransactionMinAggregate");
const TransactionSumAggregate_1 = require("../outputs/TransactionSumAggregate");
const PAYMENT_METHOD_1 = require("../../enums/PAYMENT_METHOD");
const PAYMENT_TYPE_1 = require("../../enums/PAYMENT_TYPE");
let TransactionGroupBy = class TransactionGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TransactionGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TransactionGroupBy.prototype, "bookingOrderId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TransactionGroupBy.prototype, "amountInLowestDenomination", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionGroupBy.prototype, "currencyId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionGroupBy.prototype, "SelectedPaymentType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionGroupBy.prototype, "stripePaymentReference", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PAYMENT_METHOD_1.PAYMENT_METHOD, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TransactionGroupBy.prototype, "paymentMethod", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PAYMENT_TYPE_1.PAYMENT_TYPE, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TransactionGroupBy.prototype, "paymentType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], TransactionGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], TransactionGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionCountAggregate_1.TransactionCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionCountAggregate_1.TransactionCountAggregate)
], TransactionGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionAvgAggregate_1.TransactionAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionAvgAggregate_1.TransactionAvgAggregate)
], TransactionGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionSumAggregate_1.TransactionSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionSumAggregate_1.TransactionSumAggregate)
], TransactionGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionMinAggregate_1.TransactionMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionMinAggregate_1.TransactionMinAggregate)
], TransactionGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionMaxAggregate_1.TransactionMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionMaxAggregate_1.TransactionMaxAggregate)
], TransactionGroupBy.prototype, "_max", void 0);
TransactionGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TransactionGroupBy", {
        isAbstract: true
    })
], TransactionGroupBy);
exports.TransactionGroupBy = TransactionGroupBy;
