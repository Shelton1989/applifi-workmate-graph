"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonSeriesUpdateWithWhereUniqueWithoutTopicInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SeasonSeriesUpdateWithoutTopicInput_1 = require("../inputs/SeasonSeriesUpdateWithoutTopicInput");
const SeasonSeriesWhereUniqueInput_1 = require("../inputs/SeasonSeriesWhereUniqueInput");
let SeasonSeriesUpdateWithWhereUniqueWithoutTopicInput = class SeasonSeriesUpdateWithWhereUniqueWithoutTopicInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesWhereUniqueInput_1.SeasonSeriesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SeasonSeriesWhereUniqueInput_1.SeasonSeriesWhereUniqueInput)
], SeasonSeriesUpdateWithWhereUniqueWithoutTopicInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesUpdateWithoutTopicInput_1.SeasonSeriesUpdateWithoutTopicInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SeasonSeriesUpdateWithoutTopicInput_1.SeasonSeriesUpdateWithoutTopicInput)
], SeasonSeriesUpdateWithWhereUniqueWithoutTopicInput.prototype, "data", void 0);
SeasonSeriesUpdateWithWhereUniqueWithoutTopicInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SeasonSeriesUpdateWithWhereUniqueWithoutTopicInput", {
        isAbstract: true
    })
], SeasonSeriesUpdateWithWhereUniqueWithoutTopicInput);
exports.SeasonSeriesUpdateWithWhereUniqueWithoutTopicInput = SeasonSeriesUpdateWithWhereUniqueWithoutTopicInput;
