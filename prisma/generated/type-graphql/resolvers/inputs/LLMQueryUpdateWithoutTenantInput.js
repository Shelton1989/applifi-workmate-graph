"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMQueryUpdateWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const UserUpdateOneWithoutQueriesInput_1 = require("../inputs/UserUpdateOneWithoutQueriesInput");
let LLMQueryUpdateWithoutTenantInput = class LLMQueryUpdateWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], LLMQueryUpdateWithoutTenantInput.prototype, "queryLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], LLMQueryUpdateWithoutTenantInput.prototype, "question", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], LLMQueryUpdateWithoutTenantInput.prototype, "response", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], LLMQueryUpdateWithoutTenantInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], LLMQueryUpdateWithoutTenantInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneWithoutQueriesInput_1.UserUpdateOneWithoutQueriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneWithoutQueriesInput_1.UserUpdateOneWithoutQueriesInput)
], LLMQueryUpdateWithoutTenantInput.prototype, "User", void 0);
LLMQueryUpdateWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LLMQueryUpdateWithoutTenantInput", {
        isAbstract: true
    })
], LLMQueryUpdateWithoutTenantInput);
exports.LLMQueryUpdateWithoutTenantInput = LLMQueryUpdateWithoutTenantInput;
