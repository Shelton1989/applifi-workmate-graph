"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyCreateOrConnectWithoutTransactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CurrencyCreateWithoutTransactionsInput_1 = require("../inputs/CurrencyCreateWithoutTransactionsInput");
const CurrencyWhereUniqueInput_1 = require("../inputs/CurrencyWhereUniqueInput");
let CurrencyCreateOrConnectWithoutTransactionsInput = class CurrencyCreateOrConnectWithoutTransactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyWhereUniqueInput_1.CurrencyWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CurrencyWhereUniqueInput_1.CurrencyWhereUniqueInput)
], CurrencyCreateOrConnectWithoutTransactionsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyCreateWithoutTransactionsInput_1.CurrencyCreateWithoutTransactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CurrencyCreateWithoutTransactionsInput_1.CurrencyCreateWithoutTransactionsInput)
], CurrencyCreateOrConnectWithoutTransactionsInput.prototype, "create", void 0);
CurrencyCreateOrConnectWithoutTransactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CurrencyCreateOrConnectWithoutTransactionsInput", {
        isAbstract: true
    })
], CurrencyCreateOrConnectWithoutTransactionsInput);
exports.CurrencyCreateOrConnectWithoutTransactionsInput = CurrencyCreateOrConnectWithoutTransactionsInput;
