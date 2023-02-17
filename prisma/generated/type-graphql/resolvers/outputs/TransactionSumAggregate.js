"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TransactionSumAggregate = class TransactionSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TransactionSumAggregate.prototype, "amountInLowestDenomination", void 0);
TransactionSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TransactionSumAggregate", {
        isAbstract: true
    })
], TransactionSumAggregate);
exports.TransactionSumAggregate = TransactionSumAggregate;
