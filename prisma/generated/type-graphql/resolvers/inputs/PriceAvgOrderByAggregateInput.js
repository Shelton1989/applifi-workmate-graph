"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let PriceAvgOrderByAggregateInput = class PriceAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PriceAvgOrderByAggregateInput.prototype, "priceInLowestDenomination", void 0);
PriceAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceAvgOrderByAggregateInput", {
        isAbstract: true
    })
], PriceAvgOrderByAggregateInput);
exports.PriceAvgOrderByAggregateInput = PriceAvgOrderByAggregateInput;
