"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMQueryCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TenantCreateNestedOneWithoutQueriesInput_1 = require("../inputs/TenantCreateNestedOneWithoutQueriesInput");
let LLMQueryCreateWithoutUserInput = class LLMQueryCreateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LLMQueryCreateWithoutUserInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateNestedOneWithoutQueriesInput_1.TenantCreateNestedOneWithoutQueriesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantCreateNestedOneWithoutQueriesInput_1.TenantCreateNestedOneWithoutQueriesInput)
], LLMQueryCreateWithoutUserInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LLMQueryCreateWithoutUserInput.prototype, "queryLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LLMQueryCreateWithoutUserInput.prototype, "question", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LLMQueryCreateWithoutUserInput.prototype, "response", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], LLMQueryCreateWithoutUserInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], LLMQueryCreateWithoutUserInput.prototype, "updatedAt", void 0);
LLMQueryCreateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LLMQueryCreateWithoutUserInput", {
        isAbstract: true
    })
], LLMQueryCreateWithoutUserInput);
exports.LLMQueryCreateWithoutUserInput = LLMQueryCreateWithoutUserInput;
