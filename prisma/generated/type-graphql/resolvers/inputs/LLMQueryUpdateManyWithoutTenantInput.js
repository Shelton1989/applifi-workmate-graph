"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMQueryUpdateManyWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LLMQueryCreateManyTenantInputEnvelope_1 = require("../inputs/LLMQueryCreateManyTenantInputEnvelope");
const LLMQueryCreateOrConnectWithoutTenantInput_1 = require("../inputs/LLMQueryCreateOrConnectWithoutTenantInput");
const LLMQueryCreateWithoutTenantInput_1 = require("../inputs/LLMQueryCreateWithoutTenantInput");
const LLMQueryScalarWhereInput_1 = require("../inputs/LLMQueryScalarWhereInput");
const LLMQueryUpdateManyWithWhereWithoutTenantInput_1 = require("../inputs/LLMQueryUpdateManyWithWhereWithoutTenantInput");
const LLMQueryUpdateWithWhereUniqueWithoutTenantInput_1 = require("../inputs/LLMQueryUpdateWithWhereUniqueWithoutTenantInput");
const LLMQueryUpsertWithWhereUniqueWithoutTenantInput_1 = require("../inputs/LLMQueryUpsertWithWhereUniqueWithoutTenantInput");
const LLMQueryWhereUniqueInput_1 = require("../inputs/LLMQueryWhereUniqueInput");
let LLMQueryUpdateManyWithoutTenantInput = class LLMQueryUpdateManyWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LLMQueryCreateWithoutTenantInput_1.LLMQueryCreateWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LLMQueryUpdateManyWithoutTenantInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LLMQueryCreateOrConnectWithoutTenantInput_1.LLMQueryCreateOrConnectWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LLMQueryUpdateManyWithoutTenantInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LLMQueryUpsertWithWhereUniqueWithoutTenantInput_1.LLMQueryUpsertWithWhereUniqueWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LLMQueryUpdateManyWithoutTenantInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryCreateManyTenantInputEnvelope_1.LLMQueryCreateManyTenantInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LLMQueryCreateManyTenantInputEnvelope_1.LLMQueryCreateManyTenantInputEnvelope)
], LLMQueryUpdateManyWithoutTenantInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LLMQueryWhereUniqueInput_1.LLMQueryWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LLMQueryUpdateManyWithoutTenantInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LLMQueryWhereUniqueInput_1.LLMQueryWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LLMQueryUpdateManyWithoutTenantInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LLMQueryWhereUniqueInput_1.LLMQueryWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LLMQueryUpdateManyWithoutTenantInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LLMQueryWhereUniqueInput_1.LLMQueryWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LLMQueryUpdateManyWithoutTenantInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LLMQueryUpdateWithWhereUniqueWithoutTenantInput_1.LLMQueryUpdateWithWhereUniqueWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LLMQueryUpdateManyWithoutTenantInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LLMQueryUpdateManyWithWhereWithoutTenantInput_1.LLMQueryUpdateManyWithWhereWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LLMQueryUpdateManyWithoutTenantInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LLMQueryScalarWhereInput_1.LLMQueryScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LLMQueryUpdateManyWithoutTenantInput.prototype, "deleteMany", void 0);
LLMQueryUpdateManyWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LLMQueryUpdateManyWithoutTenantInput", {
        isAbstract: true
    })
], LLMQueryUpdateManyWithoutTenantInput);
exports.LLMQueryUpdateManyWithoutTenantInput = LLMQueryUpdateManyWithoutTenantInput;
