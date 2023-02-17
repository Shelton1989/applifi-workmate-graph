"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TransactionWhereUniqueInput = class TransactionWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionWhereUniqueInput.prototype, "id", void 0);
TransactionWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionWhereUniqueInput", {
        isAbstract: true
    })
], TransactionWhereUniqueInput);
exports.TransactionWhereUniqueInput = TransactionWhereUniqueInput;
