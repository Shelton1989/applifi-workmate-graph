"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMQueryCreateWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutQueriesInput_1 = require("../inputs/UserCreateNestedOneWithoutQueriesInput");
let LLMQueryCreateWithoutTenantInput = class LLMQueryCreateWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LLMQueryCreateWithoutTenantInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LLMQueryCreateWithoutTenantInput.prototype, "queryLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LLMQueryCreateWithoutTenantInput.prototype, "question", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LLMQueryCreateWithoutTenantInput.prototype, "response", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], LLMQueryCreateWithoutTenantInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], LLMQueryCreateWithoutTenantInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutQueriesInput_1.UserCreateNestedOneWithoutQueriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutQueriesInput_1.UserCreateNestedOneWithoutQueriesInput)
], LLMQueryCreateWithoutTenantInput.prototype, "User", void 0);
LLMQueryCreateWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LLMQueryCreateWithoutTenantInput", {
        isAbstract: true
    })
], LLMQueryCreateWithoutTenantInput);
exports.LLMQueryCreateWithoutTenantInput = LLMQueryCreateWithoutTenantInput;
