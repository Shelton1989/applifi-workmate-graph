"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMQueryCreateNestedManyWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LLMQueryCreateManyTenantInputEnvelope_1 = require("../inputs/LLMQueryCreateManyTenantInputEnvelope");
const LLMQueryCreateOrConnectWithoutTenantInput_1 = require("../inputs/LLMQueryCreateOrConnectWithoutTenantInput");
const LLMQueryCreateWithoutTenantInput_1 = require("../inputs/LLMQueryCreateWithoutTenantInput");
const LLMQueryWhereUniqueInput_1 = require("../inputs/LLMQueryWhereUniqueInput");
let LLMQueryCreateNestedManyWithoutTenantInput = class LLMQueryCreateNestedManyWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LLMQueryCreateWithoutTenantInput_1.LLMQueryCreateWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LLMQueryCreateNestedManyWithoutTenantInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LLMQueryCreateOrConnectWithoutTenantInput_1.LLMQueryCreateOrConnectWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LLMQueryCreateNestedManyWithoutTenantInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryCreateManyTenantInputEnvelope_1.LLMQueryCreateManyTenantInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LLMQueryCreateManyTenantInputEnvelope_1.LLMQueryCreateManyTenantInputEnvelope)
], LLMQueryCreateNestedManyWithoutTenantInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LLMQueryWhereUniqueInput_1.LLMQueryWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LLMQueryCreateNestedManyWithoutTenantInput.prototype, "connect", void 0);
LLMQueryCreateNestedManyWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LLMQueryCreateNestedManyWithoutTenantInput", {
        isAbstract: true
    })
], LLMQueryCreateNestedManyWithoutTenantInput);
exports.LLMQueryCreateNestedManyWithoutTenantInput = LLMQueryCreateNestedManyWithoutTenantInput;
