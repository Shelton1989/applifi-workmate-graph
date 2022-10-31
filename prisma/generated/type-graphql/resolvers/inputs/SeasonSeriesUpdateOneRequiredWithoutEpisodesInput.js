"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonSeriesUpdateOneRequiredWithoutEpisodesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SeasonSeriesCreateOrConnectWithoutEpisodesInput_1 = require("../inputs/SeasonSeriesCreateOrConnectWithoutEpisodesInput");
const SeasonSeriesCreateWithoutEpisodesInput_1 = require("../inputs/SeasonSeriesCreateWithoutEpisodesInput");
const SeasonSeriesUpdateWithoutEpisodesInput_1 = require("../inputs/SeasonSeriesUpdateWithoutEpisodesInput");
const SeasonSeriesUpsertWithoutEpisodesInput_1 = require("../inputs/SeasonSeriesUpsertWithoutEpisodesInput");
const SeasonSeriesWhereUniqueInput_1 = require("../inputs/SeasonSeriesWhereUniqueInput");
let SeasonSeriesUpdateOneRequiredWithoutEpisodesInput = class SeasonSeriesUpdateOneRequiredWithoutEpisodesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesCreateWithoutEpisodesInput_1.SeasonSeriesCreateWithoutEpisodesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesCreateWithoutEpisodesInput_1.SeasonSeriesCreateWithoutEpisodesInput)
], SeasonSeriesUpdateOneRequiredWithoutEpisodesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesCreateOrConnectWithoutEpisodesInput_1.SeasonSeriesCreateOrConnectWithoutEpisodesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesCreateOrConnectWithoutEpisodesInput_1.SeasonSeriesCreateOrConnectWithoutEpisodesInput)
], SeasonSeriesUpdateOneRequiredWithoutEpisodesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesUpsertWithoutEpisodesInput_1.SeasonSeriesUpsertWithoutEpisodesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesUpsertWithoutEpisodesInput_1.SeasonSeriesUpsertWithoutEpisodesInput)
], SeasonSeriesUpdateOneRequiredWithoutEpisodesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesWhereUniqueInput_1.SeasonSeriesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesWhereUniqueInput_1.SeasonSeriesWhereUniqueInput)
], SeasonSeriesUpdateOneRequiredWithoutEpisodesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesUpdateWithoutEpisodesInput_1.SeasonSeriesUpdateWithoutEpisodesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesUpdateWithoutEpisodesInput_1.SeasonSeriesUpdateWithoutEpisodesInput)
], SeasonSeriesUpdateOneRequiredWithoutEpisodesInput.prototype, "update", void 0);
SeasonSeriesUpdateOneRequiredWithoutEpisodesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SeasonSeriesUpdateOneRequiredWithoutEpisodesInput", {
        isAbstract: true
    })
], SeasonSeriesUpdateOneRequiredWithoutEpisodesInput);
exports.SeasonSeriesUpdateOneRequiredWithoutEpisodesInput = SeasonSeriesUpdateOneRequiredWithoutEpisodesInput;
