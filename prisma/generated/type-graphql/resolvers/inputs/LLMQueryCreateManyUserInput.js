"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMQueryCreateManyUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let LLMQueryCreateManyUserInput = class LLMQueryCreateManyUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LLMQueryCreateManyUserInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LLMQueryCreateManyUserInput.prototype, "tenantId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LLMQueryCreateManyUserInput.prototype, "queryLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LLMQueryCreateManyUserInput.prototype, "question", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LLMQueryCreateManyUserInput.prototype, "response", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], LLMQueryCreateManyUserInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], LLMQueryCreateManyUserInput.prototype, "updatedAt", void 0);
LLMQueryCreateManyUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LLMQueryCreateManyUserInput", {
        isAbstract: true
    })
], LLMQueryCreateManyUserInput);
exports.LLMQueryCreateManyUserInput = LLMQueryCreateManyUserInput;
