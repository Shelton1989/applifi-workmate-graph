"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionUpsertWithWhereUniqueWithoutCurrencyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionCreateWithoutCurrencyInput_1 = require("../inputs/TransactionCreateWithoutCurrencyInput");
const TransactionUpdateWithoutCurrencyInput_1 = require("../inputs/TransactionUpdateWithoutCurrencyInput");
const TransactionWhereUniqueInput_1 = require("../inputs/TransactionWhereUniqueInput");
let TransactionUpsertWithWhereUniqueWithoutCurrencyInput = class TransactionUpsertWithWhereUniqueWithoutCurrencyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionWhereUniqueInput_1.TransactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionWhereUniqueInput_1.TransactionWhereUniqueInput)
], TransactionUpsertWithWhereUniqueWithoutCurrencyInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionUpdateWithoutCurrencyInput_1.TransactionUpdateWithoutCurrencyInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionUpdateWithoutCurrencyInput_1.TransactionUpdateWithoutCurrencyInput)
], TransactionUpsertWithWhereUniqueWithoutCurrencyInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionCreateWithoutCurrencyInput_1.TransactionCreateWithoutCurrencyInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionCreateWithoutCurrencyInput_1.TransactionCreateWithoutCurrencyInput)
], TransactionUpsertWithWhereUniqueWithoutCurrencyInput.prototype, "create", void 0);
TransactionUpsertWithWhereUniqueWithoutCurrencyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionUpsertWithWhereUniqueWithoutCurrencyInput", {
        isAbstract: true
    })
], TransactionUpsertWithWhereUniqueWithoutCurrencyInput);
exports.TransactionUpsertWithWhereUniqueWithoutCurrencyInput = TransactionUpsertWithWhereUniqueWithoutCurrencyInput;
