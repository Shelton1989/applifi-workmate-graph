"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantUpsertWithoutBillingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TenantCreateWithoutBillingInput_1 = require("../inputs/TenantCreateWithoutBillingInput");
const TenantUpdateWithoutBillingInput_1 = require("../inputs/TenantUpdateWithoutBillingInput");
let TenantUpsertWithoutBillingInput = class TenantUpsertWithoutBillingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpdateWithoutBillingInput_1.TenantUpdateWithoutBillingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantUpdateWithoutBillingInput_1.TenantUpdateWithoutBillingInput)
], TenantUpsertWithoutBillingInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateWithoutBillingInput_1.TenantCreateWithoutBillingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantCreateWithoutBillingInput_1.TenantCreateWithoutBillingInput)
], TenantUpsertWithoutBillingInput.prototype, "create", void 0);
TenantUpsertWithoutBillingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantUpsertWithoutBillingInput", {
        isAbstract: true
    })
], TenantUpsertWithoutBillingInput);
exports.TenantUpsertWithoutBillingInput = TenantUpsertWithoutBillingInput;
