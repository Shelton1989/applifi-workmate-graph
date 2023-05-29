"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantUpsertWithoutDocumentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TenantCreateWithoutDocumentsInput_1 = require("../inputs/TenantCreateWithoutDocumentsInput");
const TenantUpdateWithoutDocumentsInput_1 = require("../inputs/TenantUpdateWithoutDocumentsInput");
let TenantUpsertWithoutDocumentsInput = class TenantUpsertWithoutDocumentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpdateWithoutDocumentsInput_1.TenantUpdateWithoutDocumentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantUpdateWithoutDocumentsInput_1.TenantUpdateWithoutDocumentsInput)
], TenantUpsertWithoutDocumentsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateWithoutDocumentsInput_1.TenantCreateWithoutDocumentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantCreateWithoutDocumentsInput_1.TenantCreateWithoutDocumentsInput)
], TenantUpsertWithoutDocumentsInput.prototype, "create", void 0);
TenantUpsertWithoutDocumentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantUpsertWithoutDocumentsInput", {
        isAbstract: true
    })
], TenantUpsertWithoutDocumentsInput);
exports.TenantUpsertWithoutDocumentsInput = TenantUpsertWithoutDocumentsInput;
