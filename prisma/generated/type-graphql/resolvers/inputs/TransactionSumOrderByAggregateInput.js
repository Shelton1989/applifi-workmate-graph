"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TransactionSumOrderByAggregateInput = class TransactionSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionSumOrderByAggregateInput.prototype, "amountInLowestDenomination", void 0);
TransactionSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionSumOrderByAggregateInput", {
        isAbstract: true
    })
], TransactionSumOrderByAggregateInput);
exports.TransactionSumOrderByAggregateInput = TransactionSumOrderByAggregateInput;
