"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonSeriesCreateNestedOneWithoutAggregateRatingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SeasonSeriesCreateOrConnectWithoutAggregateRatingInput_1 = require("../inputs/SeasonSeriesCreateOrConnectWithoutAggregateRatingInput");
const SeasonSeriesCreateWithoutAggregateRatingInput_1 = require("../inputs/SeasonSeriesCreateWithoutAggregateRatingInput");
const SeasonSeriesWhereUniqueInput_1 = require("../inputs/SeasonSeriesWhereUniqueInput");
let SeasonSeriesCreateNestedOneWithoutAggregateRatingInput = class SeasonSeriesCreateNestedOneWithoutAggregateRatingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesCreateWithoutAggregateRatingInput_1.SeasonSeriesCreateWithoutAggregateRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesCreateWithoutAggregateRatingInput_1.SeasonSeriesCreateWithoutAggregateRatingInput)
], SeasonSeriesCreateNestedOneWithoutAggregateRatingInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesCreateOrConnectWithoutAggregateRatingInput_1.SeasonSeriesCreateOrConnectWithoutAggregateRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesCreateOrConnectWithoutAggregateRatingInput_1.SeasonSeriesCreateOrConnectWithoutAggregateRatingInput)
], SeasonSeriesCreateNestedOneWithoutAggregateRatingInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesWhereUniqueInput_1.SeasonSeriesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesWhereUniqueInput_1.SeasonSeriesWhereUniqueInput)
], SeasonSeriesCreateNestedOneWithoutAggregateRatingInput.prototype, "connect", void 0);
SeasonSeriesCreateNestedOneWithoutAggregateRatingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SeasonSeriesCreateNestedOneWithoutAggregateRatingInput", {
        isAbstract: true
    })
], SeasonSeriesCreateNestedOneWithoutAggregateRatingInput);
exports.SeasonSeriesCreateNestedOneWithoutAggregateRatingInput = SeasonSeriesCreateNestedOneWithoutAggregateRatingInput;
