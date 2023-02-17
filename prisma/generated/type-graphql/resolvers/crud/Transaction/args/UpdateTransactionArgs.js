"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTransactionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionUpdateInput_1 = require("../../../inputs/TransactionUpdateInput");
const TransactionWhereUniqueInput_1 = require("../../../inputs/TransactionWhereUniqueInput");
let UpdateTransactionArgs = class UpdateTransactionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionUpdateInput_1.TransactionUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionUpdateInput_1.TransactionUpdateInput)
], UpdateTransactionArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionWhereUniqueInput_1.TransactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionWhereUniqueInput_1.TransactionWhereUniqueInput)
], UpdateTransactionArgs.prototype, "where", void 0);
UpdateTransactionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateTransactionArgs);
exports.UpdateTransactionArgs = UpdateTransactionArgs;
