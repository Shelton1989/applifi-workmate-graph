"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonSeriesWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let SeasonSeriesWhereUniqueInput = class SeasonSeriesWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesWhereUniqueInput.prototype, "aggregateRatingId", void 0);
SeasonSeriesWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SeasonSeriesWhereUniqueInput", {
        isAbstract: true
    })
], SeasonSeriesWhereUniqueInput);
exports.SeasonSeriesWhereUniqueInput = SeasonSeriesWhereUniqueInput;
