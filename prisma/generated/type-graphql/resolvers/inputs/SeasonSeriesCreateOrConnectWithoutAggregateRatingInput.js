"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonSeriesCreateOrConnectWithoutAggregateRatingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SeasonSeriesCreateWithoutAggregateRatingInput_1 = require("../inputs/SeasonSeriesCreateWithoutAggregateRatingInput");
const SeasonSeriesWhereUniqueInput_1 = require("../inputs/SeasonSeriesWhereUniqueInput");
let SeasonSeriesCreateOrConnectWithoutAggregateRatingInput = class SeasonSeriesCreateOrConnectWithoutAggregateRatingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesWhereUniqueInput_1.SeasonSeriesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SeasonSeriesWhereUniqueInput_1.SeasonSeriesWhereUniqueInput)
], SeasonSeriesCreateOrConnectWithoutAggregateRatingInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesCreateWithoutAggregateRatingInput_1.SeasonSeriesCreateWithoutAggregateRatingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SeasonSeriesCreateWithoutAggregateRatingInput_1.SeasonSeriesCreateWithoutAggregateRatingInput)
], SeasonSeriesCreateOrConnectWithoutAggregateRatingInput.prototype, "create", void 0);
SeasonSeriesCreateOrConnectWithoutAggregateRatingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SeasonSeriesCreateOrConnectWithoutAggregateRatingInput", {
        isAbstract: true
    })
], SeasonSeriesCreateOrConnectWithoutAggregateRatingInput);
exports.SeasonSeriesCreateOrConnectWithoutAggregateRatingInput = SeasonSeriesCreateOrConnectWithoutAggregateRatingInput;
