"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionCreateManyCurrencyInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionCreateManyCurrencyInput_1 = require("../inputs/TransactionCreateManyCurrencyInput");
let TransactionCreateManyCurrencyInputEnvelope = class TransactionCreateManyCurrencyInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionCreateManyCurrencyInput_1.TransactionCreateManyCurrencyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionCreateManyCurrencyInputEnvelope.prototype, "data", void 0);
TransactionCreateManyCurrencyInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionCreateManyCurrencyInputEnvelope", {
        isAbstract: true
    })
], TransactionCreateManyCurrencyInputEnvelope);
exports.TransactionCreateManyCurrencyInputEnvelope = TransactionCreateManyCurrencyInputEnvelope;
