"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonSeriesRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SeasonSeriesWhereInput_1 = require("../inputs/SeasonSeriesWhereInput");
let SeasonSeriesRelationFilter = class SeasonSeriesRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesWhereInput_1.SeasonSeriesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesWhereInput_1.SeasonSeriesWhereInput)
], SeasonSeriesRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesWhereInput_1.SeasonSeriesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesWhereInput_1.SeasonSeriesWhereInput)
], SeasonSeriesRelationFilter.prototype, "isNot", void 0);
SeasonSeriesRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("SeasonSeriesRelationFilter", {
        isAbstract: true
    })
], SeasonSeriesRelationFilter);
exports.SeasonSeriesRelationFilter = SeasonSeriesRelationFilter;
