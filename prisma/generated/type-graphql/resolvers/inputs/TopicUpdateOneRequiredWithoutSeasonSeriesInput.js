"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicUpdateOneRequiredWithoutSeasonSeriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TopicCreateOrConnectWithoutSeasonSeriesInput_1 = require("../inputs/TopicCreateOrConnectWithoutSeasonSeriesInput");
const TopicCreateWithoutSeasonSeriesInput_1 = require("../inputs/TopicCreateWithoutSeasonSeriesInput");
const TopicUpdateWithoutSeasonSeriesInput_1 = require("../inputs/TopicUpdateWithoutSeasonSeriesInput");
const TopicUpsertWithoutSeasonSeriesInput_1 = require("../inputs/TopicUpsertWithoutSeasonSeriesInput");
const TopicWhereUniqueInput_1 = require("../inputs/TopicWhereUniqueInput");
let TopicUpdateOneRequiredWithoutSeasonSeriesInput = class TopicUpdateOneRequiredWithoutSeasonSeriesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreateWithoutSeasonSeriesInput_1.TopicCreateWithoutSeasonSeriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreateWithoutSeasonSeriesInput_1.TopicCreateWithoutSeasonSeriesInput)
], TopicUpdateOneRequiredWithoutSeasonSeriesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreateOrConnectWithoutSeasonSeriesInput_1.TopicCreateOrConnectWithoutSeasonSeriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreateOrConnectWithoutSeasonSeriesInput_1.TopicCreateOrConnectWithoutSeasonSeriesInput)
], TopicUpdateOneRequiredWithoutSeasonSeriesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpsertWithoutSeasonSeriesInput_1.TopicUpsertWithoutSeasonSeriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicUpsertWithoutSeasonSeriesInput_1.TopicUpsertWithoutSeasonSeriesInput)
], TopicUpdateOneRequiredWithoutSeasonSeriesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicWhereUniqueInput_1.TopicWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicWhereUniqueInput_1.TopicWhereUniqueInput)
], TopicUpdateOneRequiredWithoutSeasonSeriesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdateWithoutSeasonSeriesInput_1.TopicUpdateWithoutSeasonSeriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicUpdateWithoutSeasonSeriesInput_1.TopicUpdateWithoutSeasonSeriesInput)
], TopicUpdateOneRequiredWithoutSeasonSeriesInput.prototype, "update", void 0);
TopicUpdateOneRequiredWithoutSeasonSeriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicUpdateOneRequiredWithoutSeasonSeriesInput", {
        isAbstract: true
    })
], TopicUpdateOneRequiredWithoutSeasonSeriesInput);
exports.TopicUpdateOneRequiredWithoutSeasonSeriesInput = TopicUpdateOneRequiredWithoutSeasonSeriesInput;
