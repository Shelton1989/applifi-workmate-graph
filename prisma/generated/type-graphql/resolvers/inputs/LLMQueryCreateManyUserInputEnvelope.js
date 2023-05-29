"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMQueryCreateManyUserInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LLMQueryCreateManyUserInput_1 = require("../inputs/LLMQueryCreateManyUserInput");
let LLMQueryCreateManyUserInputEnvelope = class LLMQueryCreateManyUserInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LLMQueryCreateManyUserInput_1.LLMQueryCreateManyUserInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], LLMQueryCreateManyUserInputEnvelope.prototype, "data", void 0);
LLMQueryCreateManyUserInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("LLMQueryCreateManyUserInputEnvelope", {
        isAbstract: true
    })
], LLMQueryCreateManyUserInputEnvelope);
exports.LLMQueryCreateManyUserInputEnvelope = LLMQueryCreateManyUserInputEnvelope;
