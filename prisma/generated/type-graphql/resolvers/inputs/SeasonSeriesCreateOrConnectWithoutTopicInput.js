"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonSeriesCreateOrConnectWithoutTopicInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SeasonSeriesCreateWithoutTopicInput_1 = require("../inputs/SeasonSeriesCreateWithoutTopicInput");
const SeasonSeriesWhereUniqueInput_1 = require("../inputs/SeasonSeriesWhereUniqueInput");
let SeasonSeriesCreateOrConnectWithoutTopicInput = class SeasonSeriesCreateOrConnectWithoutTopicInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesWhereUniqueInput_1.SeasonSeriesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SeasonSeriesWhereUniqueInput_1.SeasonSeriesWhereUniqueInput)
], SeasonSeriesCreateOrConnectWithoutTopicInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesCreateWithoutTopicInput_1.SeasonSeriesCreateWithoutTopicInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SeasonSeriesCreateWithoutTopicInput_1.SeasonSeriesCreateWithoutTopicInput)
], SeasonSeriesCreateOrConnectWithoutTopicInput.prototype, "create", void 0);
SeasonSeriesCreateOrConnectWithoutTopicInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SeasonSeriesCreateOrConnectWithoutTopicInput", {
        isAbstract: true
    })
], SeasonSeriesCreateOrConnectWithoutTopicInput);
exports.SeasonSeriesCreateOrConnectWithoutTopicInput = SeasonSeriesCreateOrConnectWithoutTopicInput;
