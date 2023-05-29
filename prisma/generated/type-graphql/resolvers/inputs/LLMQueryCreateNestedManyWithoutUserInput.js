"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMQueryCreateNestedManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LLMQueryCreateManyUserInputEnvelope_1 = require("../inputs/LLMQueryCreateManyUserInputEnvelope");
const LLMQueryCreateOrConnectWithoutUserInput_1 = require("../inputs/LLMQueryCreateOrConnectWithoutUserInput");
const LLMQueryCreateWithoutUserInput_1 = require("../inputs/LLMQueryCreateWithoutUserInput");
const LLMQueryWhereUniqueInput_1 = require("../inputs/LLMQueryWhereUniqueInput");
let LLMQueryCreateNestedManyWithoutUserInput = class LLMQueryCreateNestedManyWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LLMQueryCreateWithoutUserInput_1.LLMQueryCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LLMQueryCreateNestedManyWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LLMQueryCreateOrConnectWithoutUserInput_1.LLMQueryCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LLMQueryCreateNestedManyWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryCreateManyUserInputEnvelope_1.LLMQueryCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LLMQueryCreateManyUserInputEnvelope_1.LLMQueryCreateManyUserInputEnvelope)
], LLMQueryCreateNestedManyWithoutUserInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LLMQueryWhereUniqueInput_1.LLMQueryWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LLMQueryCreateNestedManyWithoutUserInput.prototype, "connect", void 0);
LLMQueryCreateNestedManyWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LLMQueryCreateNestedManyWithoutUserInput", {
        isAbstract: true
    })
], LLMQueryCreateNestedManyWithoutUserInput);
exports.LLMQueryCreateNestedManyWithoutUserInput = LLMQueryCreateNestedManyWithoutUserInput;
