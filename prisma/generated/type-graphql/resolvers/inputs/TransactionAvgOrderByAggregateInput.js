"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TransactionAvgOrderByAggregateInput = class TransactionAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionAvgOrderByAggregateInput.prototype, "amountInLowestDenomination", void 0);
TransactionAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionAvgOrderByAggregateInput", {
        isAbstract: true
    })
], TransactionAvgOrderByAggregateInput);
exports.TransactionAvgOrderByAggregateInput = TransactionAvgOrderByAggregateInput;
