"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMQueryCreateManyTenantInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LLMQueryCreateManyTenantInput_1 = require("../inputs/LLMQueryCreateManyTenantInput");
let LLMQueryCreateManyTenantInputEnvelope = class LLMQueryCreateManyTenantInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LLMQueryCreateManyTenantInput_1.LLMQueryCreateManyTenantInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], LLMQueryCreateManyTenantInputEnvelope.prototype, "data", void 0);
LLMQueryCreateManyTenantInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("LLMQueryCreateManyTenantInputEnvelope", {
        isAbstract: true
    })
], LLMQueryCreateManyTenantInputEnvelope);
exports.LLMQueryCreateManyTenantInputEnvelope = LLMQueryCreateManyTenantInputEnvelope;
