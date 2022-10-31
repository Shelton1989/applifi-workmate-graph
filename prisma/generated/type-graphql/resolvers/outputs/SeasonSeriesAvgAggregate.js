"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonSeriesAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let SeasonSeriesAvgAggregate = class SeasonSeriesAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], SeasonSeriesAvgAggregate.prototype, "seasonOrSeriesNumber", void 0);
SeasonSeriesAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SeasonSeriesAvgAggregate", {
        isAbstract: true
    })
], SeasonSeriesAvgAggregate);
exports.SeasonSeriesAvgAggregate = SeasonSeriesAvgAggregate;
