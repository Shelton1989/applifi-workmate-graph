"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMQueryCreateOrConnectWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LLMQueryCreateWithoutTenantInput_1 = require("../inputs/LLMQueryCreateWithoutTenantInput");
const LLMQueryWhereUniqueInput_1 = require("../inputs/LLMQueryWhereUniqueInput");
let LLMQueryCreateOrConnectWithoutTenantInput = class LLMQueryCreateOrConnectWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryWhereUniqueInput_1.LLMQueryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LLMQueryWhereUniqueInput_1.LLMQueryWhereUniqueInput)
], LLMQueryCreateOrConnectWithoutTenantInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryCreateWithoutTenantInput_1.LLMQueryCreateWithoutTenantInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LLMQueryCreateWithoutTenantInput_1.LLMQueryCreateWithoutTenantInput)
], LLMQueryCreateOrConnectWithoutTenantInput.prototype, "create", void 0);
LLMQueryCreateOrConnectWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LLMQueryCreateOrConnectWithoutTenantInput", {
        isAbstract: true
    })
], LLMQueryCreateOrConnectWithoutTenantInput);
exports.LLMQueryCreateOrConnectWithoutTenantInput = LLMQueryCreateOrConnectWithoutTenantInput;
