"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertTransactionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionCreateInput_1 = require("../../../inputs/TransactionCreateInput");
const TransactionUpdateInput_1 = require("../../../inputs/TransactionUpdateInput");
const TransactionWhereUniqueInput_1 = require("../../../inputs/TransactionWhereUniqueInput");
let UpsertTransactionArgs = class UpsertTransactionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionWhereUniqueInput_1.TransactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionWhereUniqueInput_1.TransactionWhereUniqueInput)
], UpsertTransactionArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionCreateInput_1.TransactionCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionCreateInput_1.TransactionCreateInput)
], UpsertTransactionArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionUpdateInput_1.TransactionUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionUpdateInput_1.TransactionUpdateInput)
], UpsertTransactionArgs.prototype, "update", void 0);
UpsertTransactionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertTransactionArgs);
exports.UpsertTransactionArgs = UpsertTransactionArgs;
