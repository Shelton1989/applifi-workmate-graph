"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionCreateNestedManyWithoutCurrencyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionCreateManyCurrencyInputEnvelope_1 = require("../inputs/TransactionCreateManyCurrencyInputEnvelope");
const TransactionCreateOrConnectWithoutCurrencyInput_1 = require("../inputs/TransactionCreateOrConnectWithoutCurrencyInput");
const TransactionCreateWithoutCurrencyInput_1 = require("../inputs/TransactionCreateWithoutCurrencyInput");
const TransactionWhereUniqueInput_1 = require("../inputs/TransactionWhereUniqueInput");
let TransactionCreateNestedManyWithoutCurrencyInput = class TransactionCreateNestedManyWithoutCurrencyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionCreateWithoutCurrencyInput_1.TransactionCreateWithoutCurrencyInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionCreateNestedManyWithoutCurrencyInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionCreateOrConnectWithoutCurrencyInput_1.TransactionCreateOrConnectWithoutCurrencyInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionCreateNestedManyWithoutCurrencyInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionCreateManyCurrencyInputEnvelope_1.TransactionCreateManyCurrencyInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionCreateManyCurrencyInputEnvelope_1.TransactionCreateManyCurrencyInputEnvelope)
], TransactionCreateNestedManyWithoutCurrencyInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionWhereUniqueInput_1.TransactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionCreateNestedManyWithoutCurrencyInput.prototype, "connect", void 0);
TransactionCreateNestedManyWithoutCurrencyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionCreateNestedManyWithoutCurrencyInput", {
        isAbstract: true
    })
], TransactionCreateNestedManyWithoutCurrencyInput);
exports.TransactionCreateNestedManyWithoutCurrencyInput = TransactionCreateNestedManyWithoutCurrencyInput;
