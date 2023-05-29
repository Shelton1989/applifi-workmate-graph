"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const TenantUpdateOneRequiredWithoutQueriesInput_1 = require("../inputs/TenantUpdateOneRequiredWithoutQueriesInput");
const UserUpdateOneWithoutQueriesInput_1 = require("../inputs/UserUpdateOneWithoutQueriesInput");
let QueryUpdateInput = class QueryUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpdateOneRequiredWithoutQueriesInput_1.TenantUpdateOneRequiredWithoutQueriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantUpdateOneRequiredWithoutQueriesInput_1.TenantUpdateOneRequiredWithoutQueriesInput)
], QueryUpdateInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], QueryUpdateInput.prototype, "queryLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], QueryUpdateInput.prototype, "queryText", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], QueryUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], QueryUpdateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneWithoutQueriesInput_1.UserUpdateOneWithoutQueriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneWithoutQueriesInput_1.UserUpdateOneWithoutQueriesInput)
], QueryUpdateInput.prototype, "User", void 0);
QueryUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QueryUpdateInput", {
        isAbstract: true
    })
], QueryUpdateInput);
exports.QueryUpdateInput = QueryUpdateInput;
