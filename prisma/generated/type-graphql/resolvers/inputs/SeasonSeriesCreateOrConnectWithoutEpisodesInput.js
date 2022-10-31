"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonSeriesCreateOrConnectWithoutEpisodesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SeasonSeriesCreateWithoutEpisodesInput_1 = require("../inputs/SeasonSeriesCreateWithoutEpisodesInput");
const SeasonSeriesWhereUniqueInput_1 = require("../inputs/SeasonSeriesWhereUniqueInput");
let SeasonSeriesCreateOrConnectWithoutEpisodesInput = class SeasonSeriesCreateOrConnectWithoutEpisodesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesWhereUniqueInput_1.SeasonSeriesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SeasonSeriesWhereUniqueInput_1.SeasonSeriesWhereUniqueInput)
], SeasonSeriesCreateOrConnectWithoutEpisodesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesCreateWithoutEpisodesInput_1.SeasonSeriesCreateWithoutEpisodesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SeasonSeriesCreateWithoutEpisodesInput_1.SeasonSeriesCreateWithoutEpisodesInput)
], SeasonSeriesCreateOrConnectWithoutEpisodesInput.prototype, "create", void 0);
SeasonSeriesCreateOrConnectWithoutEpisodesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SeasonSeriesCreateOrConnectWithoutEpisodesInput", {
        isAbstract: true
    })
], SeasonSeriesCreateOrConnectWithoutEpisodesInput);
exports.SeasonSeriesCreateOrConnectWithoutEpisodesInput = SeasonSeriesCreateOrConnectWithoutEpisodesInput;
