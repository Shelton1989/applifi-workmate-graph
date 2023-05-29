"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMQueryUpdateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const TenantUpdateOneRequiredWithoutQueriesInput_1 = require("../inputs/TenantUpdateOneRequiredWithoutQueriesInput");
let LLMQueryUpdateWithoutUserInput = class LLMQueryUpdateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpdateOneRequiredWithoutQueriesInput_1.TenantUpdateOneRequiredWithoutQueriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantUpdateOneRequiredWithoutQueriesInput_1.TenantUpdateOneRequiredWithoutQueriesInput)
], LLMQueryUpdateWithoutUserInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], LLMQueryUpdateWithoutUserInput.prototype, "queryLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], LLMQueryUpdateWithoutUserInput.prototype, "queryText", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], LLMQueryUpdateWithoutUserInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], LLMQueryUpdateWithoutUserInput.prototype, "updatedAt", void 0);
LLMQueryUpdateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LLMQueryUpdateWithoutUserInput", {
        isAbstract: true
    })
], LLMQueryUpdateWithoutUserInput);
exports.LLMQueryUpdateWithoutUserInput = LLMQueryUpdateWithoutUserInput;
