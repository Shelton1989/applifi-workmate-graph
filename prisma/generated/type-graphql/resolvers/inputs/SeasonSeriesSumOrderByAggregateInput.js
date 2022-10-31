"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonSeriesSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let SeasonSeriesSumOrderByAggregateInput = class SeasonSeriesSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesSumOrderByAggregateInput.prototype, "seasonOrSeriesNumber", void 0);
SeasonSeriesSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SeasonSeriesSumOrderByAggregateInput", {
        isAbstract: true
    })
], SeasonSeriesSumOrderByAggregateInput);
exports.SeasonSeriesSumOrderByAggregateInput = SeasonSeriesSumOrderByAggregateInput;
