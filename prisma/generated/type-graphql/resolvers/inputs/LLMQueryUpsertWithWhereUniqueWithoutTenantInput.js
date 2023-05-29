"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMQueryUpsertWithWhereUniqueWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LLMQueryCreateWithoutTenantInput_1 = require("../inputs/LLMQueryCreateWithoutTenantInput");
const LLMQueryUpdateWithoutTenantInput_1 = require("../inputs/LLMQueryUpdateWithoutTenantInput");
const LLMQueryWhereUniqueInput_1 = require("../inputs/LLMQueryWhereUniqueInput");
let LLMQueryUpsertWithWhereUniqueWithoutTenantInput = class LLMQueryUpsertWithWhereUniqueWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryWhereUniqueInput_1.LLMQueryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LLMQueryWhereUniqueInput_1.LLMQueryWhereUniqueInput)
], LLMQueryUpsertWithWhereUniqueWithoutTenantInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryUpdateWithoutTenantInput_1.LLMQueryUpdateWithoutTenantInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LLMQueryUpdateWithoutTenantInput_1.LLMQueryUpdateWithoutTenantInput)
], LLMQueryUpsertWithWhereUniqueWithoutTenantInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryCreateWithoutTenantInput_1.LLMQueryCreateWithoutTenantInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LLMQueryCreateWithoutTenantInput_1.LLMQueryCreateWithoutTenantInput)
], LLMQueryUpsertWithWhereUniqueWithoutTenantInput.prototype, "create", void 0);
LLMQueryUpsertWithWhereUniqueWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LLMQueryUpsertWithWhereUniqueWithoutTenantInput", {
        isAbstract: true
    })
], LLMQueryUpsertWithWhereUniqueWithoutTenantInput);
exports.LLMQueryUpsertWithWhereUniqueWithoutTenantInput = LLMQueryUpsertWithWhereUniqueWithoutTenantInput;
