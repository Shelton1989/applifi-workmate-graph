"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonSeriesUpdateManyWithoutTopicInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SeasonSeriesCreateManyTopicInputEnvelope_1 = require("../inputs/SeasonSeriesCreateManyTopicInputEnvelope");
const SeasonSeriesCreateOrConnectWithoutTopicInput_1 = require("../inputs/SeasonSeriesCreateOrConnectWithoutTopicInput");
const SeasonSeriesCreateWithoutTopicInput_1 = require("../inputs/SeasonSeriesCreateWithoutTopicInput");
const SeasonSeriesScalarWhereInput_1 = require("../inputs/SeasonSeriesScalarWhereInput");
const SeasonSeriesUpdateManyWithWhereWithoutTopicInput_1 = require("../inputs/SeasonSeriesUpdateManyWithWhereWithoutTopicInput");
const SeasonSeriesUpdateWithWhereUniqueWithoutTopicInput_1 = require("../inputs/SeasonSeriesUpdateWithWhereUniqueWithoutTopicInput");
const SeasonSeriesUpsertWithWhereUniqueWithoutTopicInput_1 = require("../inputs/SeasonSeriesUpsertWithWhereUniqueWithoutTopicInput");
const SeasonSeriesWhereUniqueInput_1 = require("../inputs/SeasonSeriesWhereUniqueInput");
let SeasonSeriesUpdateManyWithoutTopicInput = class SeasonSeriesUpdateManyWithoutTopicInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SeasonSeriesCreateWithoutTopicInput_1.SeasonSeriesCreateWithoutTopicInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SeasonSeriesUpdateManyWithoutTopicInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SeasonSeriesCreateOrConnectWithoutTopicInput_1.SeasonSeriesCreateOrConnectWithoutTopicInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SeasonSeriesUpdateManyWithoutTopicInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SeasonSeriesUpsertWithWhereUniqueWithoutTopicInput_1.SeasonSeriesUpsertWithWhereUniqueWithoutTopicInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SeasonSeriesUpdateManyWithoutTopicInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesCreateManyTopicInputEnvelope_1.SeasonSeriesCreateManyTopicInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesCreateManyTopicInputEnvelope_1.SeasonSeriesCreateManyTopicInputEnvelope)
], SeasonSeriesUpdateManyWithoutTopicInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SeasonSeriesWhereUniqueInput_1.SeasonSeriesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SeasonSeriesUpdateManyWithoutTopicInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SeasonSeriesWhereUniqueInput_1.SeasonSeriesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SeasonSeriesUpdateManyWithoutTopicInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SeasonSeriesWhereUniqueInput_1.SeasonSeriesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SeasonSeriesUpdateManyWithoutTopicInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SeasonSeriesWhereUniqueInput_1.SeasonSeriesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SeasonSeriesUpdateManyWithoutTopicInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SeasonSeriesUpdateWithWhereUniqueWithoutTopicInput_1.SeasonSeriesUpdateWithWhereUniqueWithoutTopicInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SeasonSeriesUpdateManyWithoutTopicInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SeasonSeriesUpdateManyWithWhereWithoutTopicInput_1.SeasonSeriesUpdateManyWithWhereWithoutTopicInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SeasonSeriesUpdateManyWithoutTopicInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SeasonSeriesScalarWhereInput_1.SeasonSeriesScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SeasonSeriesUpdateManyWithoutTopicInput.prototype, "deleteMany", void 0);
SeasonSeriesUpdateManyWithoutTopicInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SeasonSeriesUpdateManyWithoutTopicInput", {
        isAbstract: true
    })
], SeasonSeriesUpdateManyWithoutTopicInput);
exports.SeasonSeriesUpdateManyWithoutTopicInput = SeasonSeriesUpdateManyWithoutTopicInput;
