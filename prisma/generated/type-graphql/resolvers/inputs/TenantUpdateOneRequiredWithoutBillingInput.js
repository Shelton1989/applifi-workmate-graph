"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantUpdateOneRequiredWithoutBillingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TenantCreateOrConnectWithoutBillingInput_1 = require("../inputs/TenantCreateOrConnectWithoutBillingInput");
const TenantCreateWithoutBillingInput_1 = require("../inputs/TenantCreateWithoutBillingInput");
const TenantUpdateWithoutBillingInput_1 = require("../inputs/TenantUpdateWithoutBillingInput");
const TenantUpsertWithoutBillingInput_1 = require("../inputs/TenantUpsertWithoutBillingInput");
const TenantWhereUniqueInput_1 = require("../inputs/TenantWhereUniqueInput");
let TenantUpdateOneRequiredWithoutBillingInput = class TenantUpdateOneRequiredWithoutBillingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateWithoutBillingInput_1.TenantCreateWithoutBillingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCreateWithoutBillingInput_1.TenantCreateWithoutBillingInput)
], TenantUpdateOneRequiredWithoutBillingInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateOrConnectWithoutBillingInput_1.TenantCreateOrConnectWithoutBillingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCreateOrConnectWithoutBillingInput_1.TenantCreateOrConnectWithoutBillingInput)
], TenantUpdateOneRequiredWithoutBillingInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpsertWithoutBillingInput_1.TenantUpsertWithoutBillingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantUpsertWithoutBillingInput_1.TenantUpsertWithoutBillingInput)
], TenantUpdateOneRequiredWithoutBillingInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantWhereUniqueInput_1.TenantWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantWhereUniqueInput_1.TenantWhereUniqueInput)
], TenantUpdateOneRequiredWithoutBillingInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpdateWithoutBillingInput_1.TenantUpdateWithoutBillingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantUpdateWithoutBillingInput_1.TenantUpdateWithoutBillingInput)
], TenantUpdateOneRequiredWithoutBillingInput.prototype, "update", void 0);
TenantUpdateOneRequiredWithoutBillingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantUpdateOneRequiredWithoutBillingInput", {
        isAbstract: true
    })
], TenantUpdateOneRequiredWithoutBillingInput);
exports.TenantUpdateOneRequiredWithoutBillingInput = TenantUpdateOneRequiredWithoutBillingInput;
