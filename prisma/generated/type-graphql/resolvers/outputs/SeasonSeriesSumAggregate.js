"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonSeriesSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let SeasonSeriesSumAggregate = class SeasonSeriesSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], SeasonSeriesSumAggregate.prototype, "seasonOrSeriesNumber", void 0);
SeasonSeriesSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SeasonSeriesSumAggregate", {
        isAbstract: true
    })
], SeasonSeriesSumAggregate);
exports.SeasonSeriesSumAggregate = SeasonSeriesSumAggregate;
