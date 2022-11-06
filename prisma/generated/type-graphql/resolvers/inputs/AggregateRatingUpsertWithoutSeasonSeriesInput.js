"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRatingUpsertWithoutSeasonSeriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingCreateWithoutSeasonSeriesInput_1 = require("../inputs/AggregateRatingCreateWithoutSeasonSeriesInput");
const AggregateRatingUpdateWithoutSeasonSeriesInput_1 = require("../inputs/AggregateRatingUpdateWithoutSeasonSeriesInput");
let AggregateRatingUpsertWithoutSeasonSeriesInput = class AggregateRatingUpsertWithoutSeasonSeriesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingUpdateWithoutSeasonSeriesInput_1.AggregateRatingUpdateWithoutSeasonSeriesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AggregateRatingUpdateWithoutSeasonSeriesInput_1.AggregateRatingUpdateWithoutSeasonSeriesInput)
], AggregateRatingUpsertWithoutSeasonSeriesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingCreateWithoutSeasonSeriesInput_1.AggregateRatingCreateWithoutSeasonSeriesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AggregateRatingCreateWithoutSeasonSeriesInput_1.AggregateRatingCreateWithoutSeasonSeriesInput)
], AggregateRatingUpsertWithoutSeasonSeriesInput.prototype, "create", void 0);
AggregateRatingUpsertWithoutSeasonSeriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AggregateRatingUpsertWithoutSeasonSeriesInput", {
        isAbstract: true
    })
], AggregateRatingUpsertWithoutSeasonSeriesInput);
exports.AggregateRatingUpsertWithoutSeasonSeriesInput = AggregateRatingUpsertWithoutSeasonSeriesInput;
