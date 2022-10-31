"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonSeriesCreateNestedOneWithoutEpisodesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SeasonSeriesCreateOrConnectWithoutEpisodesInput_1 = require("../inputs/SeasonSeriesCreateOrConnectWithoutEpisodesInput");
const SeasonSeriesCreateWithoutEpisodesInput_1 = require("../inputs/SeasonSeriesCreateWithoutEpisodesInput");
const SeasonSeriesWhereUniqueInput_1 = require("../inputs/SeasonSeriesWhereUniqueInput");
let SeasonSeriesCreateNestedOneWithoutEpisodesInput = class SeasonSeriesCreateNestedOneWithoutEpisodesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesCreateWithoutEpisodesInput_1.SeasonSeriesCreateWithoutEpisodesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesCreateWithoutEpisodesInput_1.SeasonSeriesCreateWithoutEpisodesInput)
], SeasonSeriesCreateNestedOneWithoutEpisodesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesCreateOrConnectWithoutEpisodesInput_1.SeasonSeriesCreateOrConnectWithoutEpisodesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesCreateOrConnectWithoutEpisodesInput_1.SeasonSeriesCreateOrConnectWithoutEpisodesInput)
], SeasonSeriesCreateNestedOneWithoutEpisodesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesWhereUniqueInput_1.SeasonSeriesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesWhereUniqueInput_1.SeasonSeriesWhereUniqueInput)
], SeasonSeriesCreateNestedOneWithoutEpisodesInput.prototype, "connect", void 0);
SeasonSeriesCreateNestedOneWithoutEpisodesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SeasonSeriesCreateNestedOneWithoutEpisodesInput", {
        isAbstract: true
    })
], SeasonSeriesCreateNestedOneWithoutEpisodesInput);
exports.SeasonSeriesCreateNestedOneWithoutEpisodesInput = SeasonSeriesCreateNestedOneWithoutEpisodesInput;
