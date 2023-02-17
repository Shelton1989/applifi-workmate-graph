"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionUpdateWithWhereUniqueWithoutCurrencyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionUpdateWithoutCurrencyInput_1 = require("../inputs/TransactionUpdateWithoutCurrencyInput");
const TransactionWhereUniqueInput_1 = require("../inputs/TransactionWhereUniqueInput");
let TransactionUpdateWithWhereUniqueWithoutCurrencyInput = class TransactionUpdateWithWhereUniqueWithoutCurrencyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionWhereUniqueInput_1.TransactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionWhereUniqueInput_1.TransactionWhereUniqueInput)
], TransactionUpdateWithWhereUniqueWithoutCurrencyInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionUpdateWithoutCurrencyInput_1.TransactionUpdateWithoutCurrencyInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionUpdateWithoutCurrencyInput_1.TransactionUpdateWithoutCurrencyInput)
], TransactionUpdateWithWhereUniqueWithoutCurrencyInput.prototype, "data", void 0);
TransactionUpdateWithWhereUniqueWithoutCurrencyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionUpdateWithWhereUniqueWithoutCurrencyInput", {
        isAbstract: true
    })
], TransactionUpdateWithWhereUniqueWithoutCurrencyInput);
exports.TransactionUpdateWithWhereUniqueWithoutCurrencyInput = TransactionUpdateWithWhereUniqueWithoutCurrencyInput;
