"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonSeriesListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SeasonSeriesWhereInput_1 = require("../inputs/SeasonSeriesWhereInput");
let SeasonSeriesListRelationFilter = class SeasonSeriesListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesWhereInput_1.SeasonSeriesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesWhereInput_1.SeasonSeriesWhereInput)
], SeasonSeriesListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesWhereInput_1.SeasonSeriesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesWhereInput_1.SeasonSeriesWhereInput)
], SeasonSeriesListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesWhereInput_1.SeasonSeriesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesWhereInput_1.SeasonSeriesWhereInput)
], SeasonSeriesListRelationFilter.prototype, "none", void 0);
SeasonSeriesListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("SeasonSeriesListRelationFilter", {
        isAbstract: true
    })
], SeasonSeriesListRelationFilter);
exports.SeasonSeriesListRelationFilter = SeasonSeriesListRelationFilter;
