"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonSeriesCreateManyTopicInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SeasonSeriesCreateManyTopicInput_1 = require("../inputs/SeasonSeriesCreateManyTopicInput");
let SeasonSeriesCreateManyTopicInputEnvelope = class SeasonSeriesCreateManyTopicInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SeasonSeriesCreateManyTopicInput_1.SeasonSeriesCreateManyTopicInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], SeasonSeriesCreateManyTopicInputEnvelope.prototype, "data", void 0);
SeasonSeriesCreateManyTopicInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("SeasonSeriesCreateManyTopicInputEnvelope", {
        isAbstract: true
    })
], SeasonSeriesCreateManyTopicInputEnvelope);
exports.SeasonSeriesCreateManyTopicInputEnvelope = SeasonSeriesCreateManyTopicInputEnvelope;
