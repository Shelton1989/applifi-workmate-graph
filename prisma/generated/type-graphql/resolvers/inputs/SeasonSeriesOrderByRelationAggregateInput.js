"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonSeriesOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let SeasonSeriesOrderByRelationAggregateInput = class SeasonSeriesOrderByRelationAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesOrderByRelationAggregateInput.prototype, "_count", void 0);
SeasonSeriesOrderByRelationAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SeasonSeriesOrderByRelationAggregateInput", {
        isAbstract: true
    })
], SeasonSeriesOrderByRelationAggregateInput);
exports.SeasonSeriesOrderByRelationAggregateInput = SeasonSeriesOrderByRelationAggregateInput;
