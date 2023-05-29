"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMQueryUpdateManyWithWhereWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LLMQueryScalarWhereInput_1 = require("../inputs/LLMQueryScalarWhereInput");
const LLMQueryUpdateManyMutationInput_1 = require("../inputs/LLMQueryUpdateManyMutationInput");
let LLMQueryUpdateManyWithWhereWithoutTenantInput = class LLMQueryUpdateManyWithWhereWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryScalarWhereInput_1.LLMQueryScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LLMQueryScalarWhereInput_1.LLMQueryScalarWhereInput)
], LLMQueryUpdateManyWithWhereWithoutTenantInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryUpdateManyMutationInput_1.LLMQueryUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LLMQueryUpdateManyMutationInput_1.LLMQueryUpdateManyMutationInput)
], LLMQueryUpdateManyWithWhereWithoutTenantInput.prototype, "data", void 0);
LLMQueryUpdateManyWithWhereWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LLMQueryUpdateManyWithWhereWithoutTenantInput", {
        isAbstract: true
    })
], LLMQueryUpdateManyWithWhereWithoutTenantInput);
exports.LLMQueryUpdateManyWithWhereWithoutTenantInput = LLMQueryUpdateManyWithWhereWithoutTenantInput;
