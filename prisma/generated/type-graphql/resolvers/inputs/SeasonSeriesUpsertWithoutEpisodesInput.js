"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonSeriesUpsertWithoutEpisodesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SeasonSeriesCreateWithoutEpisodesInput_1 = require("../inputs/SeasonSeriesCreateWithoutEpisodesInput");
const SeasonSeriesUpdateWithoutEpisodesInput_1 = require("../inputs/SeasonSeriesUpdateWithoutEpisodesInput");
let SeasonSeriesUpsertWithoutEpisodesInput = class SeasonSeriesUpsertWithoutEpisodesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesUpdateWithoutEpisodesInput_1.SeasonSeriesUpdateWithoutEpisodesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SeasonSeriesUpdateWithoutEpisodesInput_1.SeasonSeriesUpdateWithoutEpisodesInput)
], SeasonSeriesUpsertWithoutEpisodesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesCreateWithoutEpisodesInput_1.SeasonSeriesCreateWithoutEpisodesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SeasonSeriesCreateWithoutEpisodesInput_1.SeasonSeriesCreateWithoutEpisodesInput)
], SeasonSeriesUpsertWithoutEpisodesInput.prototype, "create", void 0);
SeasonSeriesUpsertWithoutEpisodesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SeasonSeriesUpsertWithoutEpisodesInput", {
        isAbstract: true
    })
], SeasonSeriesUpsertWithoutEpisodesInput);
exports.SeasonSeriesUpsertWithoutEpisodesInput = SeasonSeriesUpsertWithoutEpisodesInput;
