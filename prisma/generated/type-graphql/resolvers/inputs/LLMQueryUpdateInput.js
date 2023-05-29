"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMQueryUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const TenantUpdateOneRequiredWithoutQueriesInput_1 = require("../inputs/TenantUpdateOneRequiredWithoutQueriesInput");
const UserUpdateOneWithoutQueriesInput_1 = require("../inputs/UserUpdateOneWithoutQueriesInput");
let LLMQueryUpdateInput = class LLMQueryUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpdateOneRequiredWithoutQueriesInput_1.TenantUpdateOneRequiredWithoutQueriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantUpdateOneRequiredWithoutQueriesInput_1.TenantUpdateOneRequiredWithoutQueriesInput)
], LLMQueryUpdateInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], LLMQueryUpdateInput.prototype, "queryLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], LLMQueryUpdateInput.prototype, "queryText", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], LLMQueryUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], LLMQueryUpdateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneWithoutQueriesInput_1.UserUpdateOneWithoutQueriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneWithoutQueriesInput_1.UserUpdateOneWithoutQueriesInput)
], LLMQueryUpdateInput.prototype, "User", void 0);
LLMQueryUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LLMQueryUpdateInput", {
        isAbstract: true
    })
], LLMQueryUpdateInput);
exports.LLMQueryUpdateInput = LLMQueryUpdateInput;
