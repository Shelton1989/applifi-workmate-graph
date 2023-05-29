"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMQueryUpdateWithWhereUniqueWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LLMQueryUpdateWithoutTenantInput_1 = require("../inputs/LLMQueryUpdateWithoutTenantInput");
const LLMQueryWhereUniqueInput_1 = require("../inputs/LLMQueryWhereUniqueInput");
let LLMQueryUpdateWithWhereUniqueWithoutTenantInput = class LLMQueryUpdateWithWhereUniqueWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryWhereUniqueInput_1.LLMQueryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LLMQueryWhereUniqueInput_1.LLMQueryWhereUniqueInput)
], LLMQueryUpdateWithWhereUniqueWithoutTenantInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryUpdateWithoutTenantInput_1.LLMQueryUpdateWithoutTenantInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LLMQueryUpdateWithoutTenantInput_1.LLMQueryUpdateWithoutTenantInput)
], LLMQueryUpdateWithWhereUniqueWithoutTenantInput.prototype, "data", void 0);
LLMQueryUpdateWithWhereUniqueWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LLMQueryUpdateWithWhereUniqueWithoutTenantInput", {
        isAbstract: true
    })
], LLMQueryUpdateWithWhereUniqueWithoutTenantInput);
exports.LLMQueryUpdateWithWhereUniqueWithoutTenantInput = LLMQueryUpdateWithWhereUniqueWithoutTenantInput;
