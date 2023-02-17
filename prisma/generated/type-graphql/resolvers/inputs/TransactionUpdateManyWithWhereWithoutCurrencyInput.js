"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionUpdateManyWithWhereWithoutCurrencyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionScalarWhereInput_1 = require("../inputs/TransactionScalarWhereInput");
const TransactionUpdateManyMutationInput_1 = require("../inputs/TransactionUpdateManyMutationInput");
let TransactionUpdateManyWithWhereWithoutCurrencyInput = class TransactionUpdateManyWithWhereWithoutCurrencyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionScalarWhereInput_1.TransactionScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionScalarWhereInput_1.TransactionScalarWhereInput)
], TransactionUpdateManyWithWhereWithoutCurrencyInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionUpdateManyMutationInput_1.TransactionUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionUpdateManyMutationInput_1.TransactionUpdateManyMutationInput)
], TransactionUpdateManyWithWhereWithoutCurrencyInput.prototype, "data", void 0);
TransactionUpdateManyWithWhereWithoutCurrencyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionUpdateManyWithWhereWithoutCurrencyInput", {
        isAbstract: true
    })
], TransactionUpdateManyWithWhereWithoutCurrencyInput);
exports.TransactionUpdateManyWithWhereWithoutCurrencyInput = TransactionUpdateManyWithWhereWithoutCurrencyInput;
