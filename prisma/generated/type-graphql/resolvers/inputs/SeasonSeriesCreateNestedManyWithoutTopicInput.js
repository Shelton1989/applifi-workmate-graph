"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonSeriesCreateNestedManyWithoutTopicInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SeasonSeriesCreateManyTopicInputEnvelope_1 = require("../inputs/SeasonSeriesCreateManyTopicInputEnvelope");
const SeasonSeriesCreateOrConnectWithoutTopicInput_1 = require("../inputs/SeasonSeriesCreateOrConnectWithoutTopicInput");
const SeasonSeriesCreateWithoutTopicInput_1 = require("../inputs/SeasonSeriesCreateWithoutTopicInput");
const SeasonSeriesWhereUniqueInput_1 = require("../inputs/SeasonSeriesWhereUniqueInput");
let SeasonSeriesCreateNestedManyWithoutTopicInput = class SeasonSeriesCreateNestedManyWithoutTopicInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SeasonSeriesCreateWithoutTopicInput_1.SeasonSeriesCreateWithoutTopicInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SeasonSeriesCreateNestedManyWithoutTopicInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SeasonSeriesCreateOrConnectWithoutTopicInput_1.SeasonSeriesCreateOrConnectWithoutTopicInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SeasonSeriesCreateNestedManyWithoutTopicInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesCreateManyTopicInputEnvelope_1.SeasonSeriesCreateManyTopicInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesCreateManyTopicInputEnvelope_1.SeasonSeriesCreateManyTopicInputEnvelope)
], SeasonSeriesCreateNestedManyWithoutTopicInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SeasonSeriesWhereUniqueInput_1.SeasonSeriesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SeasonSeriesCreateNestedManyWithoutTopicInput.prototype, "connect", void 0);
SeasonSeriesCreateNestedManyWithoutTopicInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SeasonSeriesCreateNestedManyWithoutTopicInput", {
        isAbstract: true
    })
], SeasonSeriesCreateNestedManyWithoutTopicInput);
exports.SeasonSeriesCreateNestedManyWithoutTopicInput = SeasonSeriesCreateNestedManyWithoutTopicInput;
