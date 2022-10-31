"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonSeriesAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let SeasonSeriesAvgOrderByAggregateInput = class SeasonSeriesAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesAvgOrderByAggregateInput.prototype, "seasonOrSeriesNumber", void 0);
SeasonSeriesAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SeasonSeriesAvgOrderByAggregateInput", {
        isAbstract: true
    })
], SeasonSeriesAvgOrderByAggregateInput);
exports.SeasonSeriesAvgOrderByAggregateInput = SeasonSeriesAvgOrderByAggregateInput;
