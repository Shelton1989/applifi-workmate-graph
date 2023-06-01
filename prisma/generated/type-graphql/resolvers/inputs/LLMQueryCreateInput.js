"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMQueryCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TenantCreateNestedOneWithoutQueriesInput_1 = require("../inputs/TenantCreateNestedOneWithoutQueriesInput");
const UserCreateNestedOneWithoutQueriesInput_1 = require("../inputs/UserCreateNestedOneWithoutQueriesInput");
let LLMQueryCreateInput = class LLMQueryCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LLMQueryCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateNestedOneWithoutQueriesInput_1.TenantCreateNestedOneWithoutQueriesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantCreateNestedOneWithoutQueriesInput_1.TenantCreateNestedOneWithoutQueriesInput)
], LLMQueryCreateInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LLMQueryCreateInput.prototype, "queryLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LLMQueryCreateInput.prototype, "question", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LLMQueryCreateInput.prototype, "response", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], LLMQueryCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], LLMQueryCreateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutQueriesInput_1.UserCreateNestedOneWithoutQueriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutQueriesInput_1.UserCreateNestedOneWithoutQueriesInput)
], LLMQueryCreateInput.prototype, "User", void 0);
LLMQueryCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LLMQueryCreateInput", {
        isAbstract: true
    })
], LLMQueryCreateInput);
exports.LLMQueryCreateInput = LLMQueryCreateInput;
