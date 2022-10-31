"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicUpsertWithoutSeasonSeriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TopicCreateWithoutSeasonSeriesInput_1 = require("../inputs/TopicCreateWithoutSeasonSeriesInput");
const TopicUpdateWithoutSeasonSeriesInput_1 = require("../inputs/TopicUpdateWithoutSeasonSeriesInput");
let TopicUpsertWithoutSeasonSeriesInput = class TopicUpsertWithoutSeasonSeriesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdateWithoutSeasonSeriesInput_1.TopicUpdateWithoutSeasonSeriesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TopicUpdateWithoutSeasonSeriesInput_1.TopicUpdateWithoutSeasonSeriesInput)
], TopicUpsertWithoutSeasonSeriesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreateWithoutSeasonSeriesInput_1.TopicCreateWithoutSeasonSeriesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TopicCreateWithoutSeasonSeriesInput_1.TopicCreateWithoutSeasonSeriesInput)
], TopicUpsertWithoutSeasonSeriesInput.prototype, "create", void 0);
TopicUpsertWithoutSeasonSeriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicUpsertWithoutSeasonSeriesInput", {
        isAbstract: true
    })
], TopicUpsertWithoutSeasonSeriesInput);
exports.TopicUpsertWithoutSeasonSeriesInput = TopicUpsertWithoutSeasonSeriesInput;
