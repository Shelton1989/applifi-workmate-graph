"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingUpsertWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillingCreateWithoutTenantInput_1 = require("../inputs/BillingCreateWithoutTenantInput");
const BillingUpdateWithoutTenantInput_1 = require("../inputs/BillingUpdateWithoutTenantInput");
let BillingUpsertWithoutTenantInput = class BillingUpsertWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingUpdateWithoutTenantInput_1.BillingUpdateWithoutTenantInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BillingUpdateWithoutTenantInput_1.BillingUpdateWithoutTenantInput)
], BillingUpsertWithoutTenantInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingCreateWithoutTenantInput_1.BillingCreateWithoutTenantInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BillingCreateWithoutTenantInput_1.BillingCreateWithoutTenantInput)
], BillingUpsertWithoutTenantInput.prototype, "create", void 0);
BillingUpsertWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BillingUpsertWithoutTenantInput", {
        isAbstract: true
    })
], BillingUpsertWithoutTenantInput);
exports.BillingUpsertWithoutTenantInput = BillingUpsertWithoutTenantInput;
