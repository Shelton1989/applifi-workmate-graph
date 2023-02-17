"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyCreateNestedOneWithoutTransactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CurrencyCreateOrConnectWithoutTransactionsInput_1 = require("../inputs/CurrencyCreateOrConnectWithoutTransactionsInput");
const CurrencyCreateWithoutTransactionsInput_1 = require("../inputs/CurrencyCreateWithoutTransactionsInput");
const CurrencyWhereUniqueInput_1 = require("../inputs/CurrencyWhereUniqueInput");
let CurrencyCreateNestedOneWithoutTransactionsInput = class CurrencyCreateNestedOneWithoutTransactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyCreateWithoutTransactionsInput_1.CurrencyCreateWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrencyCreateWithoutTransactionsInput_1.CurrencyCreateWithoutTransactionsInput)
], CurrencyCreateNestedOneWithoutTransactionsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyCreateOrConnectWithoutTransactionsInput_1.CurrencyCreateOrConnectWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrencyCreateOrConnectWithoutTransactionsInput_1.CurrencyCreateOrConnectWithoutTransactionsInput)
], CurrencyCreateNestedOneWithoutTransactionsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyWhereUniqueInput_1.CurrencyWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrencyWhereUniqueInput_1.CurrencyWhereUniqueInput)
], CurrencyCreateNestedOneWithoutTransactionsInput.prototype, "connect", void 0);
CurrencyCreateNestedOneWithoutTransactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CurrencyCreateNestedOneWithoutTransactionsInput", {
        isAbstract: true
    })
], CurrencyCreateNestedOneWithoutTransactionsInput);
exports.CurrencyCreateNestedOneWithoutTransactionsInput = CurrencyCreateNestedOneWithoutTransactionsInput;
