"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMQueryUpdateManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LLMQueryCreateManyUserInputEnvelope_1 = require("../inputs/LLMQueryCreateManyUserInputEnvelope");
const LLMQueryCreateOrConnectWithoutUserInput_1 = require("../inputs/LLMQueryCreateOrConnectWithoutUserInput");
const LLMQueryCreateWithoutUserInput_1 = require("../inputs/LLMQueryCreateWithoutUserInput");
const LLMQueryScalarWhereInput_1 = require("../inputs/LLMQueryScalarWhereInput");
const LLMQueryUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/LLMQueryUpdateManyWithWhereWithoutUserInput");
const LLMQueryUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/LLMQueryUpdateWithWhereUniqueWithoutUserInput");
const LLMQueryUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/LLMQueryUpsertWithWhereUniqueWithoutUserInput");
const LLMQueryWhereUniqueInput_1 = require("../inputs/LLMQueryWhereUniqueInput");
let LLMQueryUpdateManyWithoutUserInput = class LLMQueryUpdateManyWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LLMQueryCreateWithoutUserInput_1.LLMQueryCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LLMQueryUpdateManyWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LLMQueryCreateOrConnectWithoutUserInput_1.LLMQueryCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LLMQueryUpdateManyWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LLMQueryUpsertWithWhereUniqueWithoutUserInput_1.LLMQueryUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LLMQueryUpdateManyWithoutUserInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryCreateManyUserInputEnvelope_1.LLMQueryCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LLMQueryCreateManyUserInputEnvelope_1.LLMQueryCreateManyUserInputEnvelope)
], LLMQueryUpdateManyWithoutUserInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LLMQueryWhereUniqueInput_1.LLMQueryWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LLMQueryUpdateManyWithoutUserInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LLMQueryWhereUniqueInput_1.LLMQueryWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LLMQueryUpdateManyWithoutUserInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LLMQueryWhereUniqueInput_1.LLMQueryWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LLMQueryUpdateManyWithoutUserInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LLMQueryWhereUniqueInput_1.LLMQueryWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LLMQueryUpdateManyWithoutUserInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LLMQueryUpdateWithWhereUniqueWithoutUserInput_1.LLMQueryUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LLMQueryUpdateManyWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LLMQueryUpdateManyWithWhereWithoutUserInput_1.LLMQueryUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LLMQueryUpdateManyWithoutUserInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LLMQueryScalarWhereInput_1.LLMQueryScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LLMQueryUpdateManyWithoutUserInput.prototype, "deleteMany", void 0);
LLMQueryUpdateManyWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LLMQueryUpdateManyWithoutUserInput", {
        isAbstract: true
    })
], LLMQueryUpdateManyWithoutUserInput);
exports.LLMQueryUpdateManyWithoutUserInput = LLMQueryUpdateManyWithoutUserInput;
