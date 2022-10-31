"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonSeriesUpsertWithWhereUniqueWithoutTopicInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SeasonSeriesCreateWithoutTopicInput_1 = require("../inputs/SeasonSeriesCreateWithoutTopicInput");
const SeasonSeriesUpdateWithoutTopicInput_1 = require("../inputs/SeasonSeriesUpdateWithoutTopicInput");
const SeasonSeriesWhereUniqueInput_1 = require("../inputs/SeasonSeriesWhereUniqueInput");
let SeasonSeriesUpsertWithWhereUniqueWithoutTopicInput = class SeasonSeriesUpsertWithWhereUniqueWithoutTopicInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesWhereUniqueInput_1.SeasonSeriesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SeasonSeriesWhereUniqueInput_1.SeasonSeriesWhereUniqueInput)
], SeasonSeriesUpsertWithWhereUniqueWithoutTopicInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesUpdateWithoutTopicInput_1.SeasonSeriesUpdateWithoutTopicInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SeasonSeriesUpdateWithoutTopicInput_1.SeasonSeriesUpdateWithoutTopicInput)
], SeasonSeriesUpsertWithWhereUniqueWithoutTopicInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesCreateWithoutTopicInput_1.SeasonSeriesCreateWithoutTopicInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SeasonSeriesCreateWithoutTopicInput_1.SeasonSeriesCreateWithoutTopicInput)
], SeasonSeriesUpsertWithWhereUniqueWithoutTopicInput.prototype, "create", void 0);
SeasonSeriesUpsertWithWhereUniqueWithoutTopicInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SeasonSeriesUpsertWithWhereUniqueWithoutTopicInput", {
        isAbstract: true
    })
], SeasonSeriesUpsertWithWhereUniqueWithoutTopicInput);
exports.SeasonSeriesUpsertWithWhereUniqueWithoutTopicInput = SeasonSeriesUpsertWithWhereUniqueWithoutTopicInput;
