"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTransactionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionCreateInput_1 = require("../../../inputs/TransactionCreateInput");
let CreateTransactionArgs = class CreateTransactionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionCreateInput_1.TransactionCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionCreateInput_1.TransactionCreateInput)
], CreateTransactionArgs.prototype, "data", void 0);
CreateTransactionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateTransactionArgs);
exports.CreateTransactionArgs = CreateTransactionArgs;
