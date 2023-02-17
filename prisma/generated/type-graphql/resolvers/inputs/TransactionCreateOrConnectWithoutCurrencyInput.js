"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionCreateOrConnectWithoutCurrencyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionCreateWithoutCurrencyInput_1 = require("../inputs/TransactionCreateWithoutCurrencyInput");
const TransactionWhereUniqueInput_1 = require("../inputs/TransactionWhereUniqueInput");
let TransactionCreateOrConnectWithoutCurrencyInput = class TransactionCreateOrConnectWithoutCurrencyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionWhereUniqueInput_1.TransactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionWhereUniqueInput_1.TransactionWhereUniqueInput)
], TransactionCreateOrConnectWithoutCurrencyInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionCreateWithoutCurrencyInput_1.TransactionCreateWithoutCurrencyInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionCreateWithoutCurrencyInput_1.TransactionCreateWithoutCurrencyInput)
], TransactionCreateOrConnectWithoutCurrencyInput.prototype, "create", void 0);
TransactionCreateOrConnectWithoutCurrencyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionCreateOrConnectWithoutCurrencyInput", {
        isAbstract: true
    })
], TransactionCreateOrConnectWithoutCurrencyInput);
exports.TransactionCreateOrConnectWithoutCurrencyInput = TransactionCreateOrConnectWithoutCurrencyInput;
