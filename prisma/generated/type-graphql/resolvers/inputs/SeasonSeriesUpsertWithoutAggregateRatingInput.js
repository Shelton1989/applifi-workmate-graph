"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonSeriesUpsertWithoutAggregateRatingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SeasonSeriesCreateWithoutAggregateRatingInput_1 = require("../inputs/SeasonSeriesCreateWithoutAggregateRatingInput");
const SeasonSeriesUpdateWithoutAggregateRatingInput_1 = require("../inputs/SeasonSeriesUpdateWithoutAggregateRatingInput");
let SeasonSeriesUpsertWithoutAggregateRatingInput = class SeasonSeriesUpsertWithoutAggregateRatingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesUpdateWithoutAggregateRatingInput_1.SeasonSeriesUpdateWithoutAggregateRatingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SeasonSeriesUpdateWithoutAggregateRatingInput_1.SeasonSeriesUpdateWithoutAggregateRatingInput)
], SeasonSeriesUpsertWithoutAggregateRatingInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesCreateWithoutAggregateRatingInput_1.SeasonSeriesCreateWithoutAggregateRatingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SeasonSeriesCreateWithoutAggregateRatingInput_1.SeasonSeriesCreateWithoutAggregateRatingInput)
], SeasonSeriesUpsertWithoutAggregateRatingInput.prototype, "create", void 0);
SeasonSeriesUpsertWithoutAggregateRatingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SeasonSeriesUpsertWithoutAggregateRatingInput", {
        isAbstract: true
    })
], SeasonSeriesUpsertWithoutAggregateRatingInput);
exports.SeasonSeriesUpsertWithoutAggregateRatingInput = SeasonSeriesUpsertWithoutAggregateRatingInput;
