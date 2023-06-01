"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMQueryCreateManyTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let LLMQueryCreateManyTenantInput = class LLMQueryCreateManyTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LLMQueryCreateManyTenantInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LLMQueryCreateManyTenantInput.prototype, "queryLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LLMQueryCreateManyTenantInput.prototype, "question", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LLMQueryCreateManyTenantInput.prototype, "response", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], LLMQueryCreateManyTenantInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], LLMQueryCreateManyTenantInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LLMQueryCreateManyTenantInput.prototype, "userId", void 0);
LLMQueryCreateManyTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LLMQueryCreateManyTenantInput", {
        isAbstract: true
    })
], LLMQueryCreateManyTenantInput);
exports.LLMQueryCreateManyTenantInput = LLMQueryCreateManyTenantInput;
