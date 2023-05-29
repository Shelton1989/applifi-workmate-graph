"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingUpdateOneWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillingCreateOrConnectWithoutTenantInput_1 = require("../inputs/BillingCreateOrConnectWithoutTenantInput");
const BillingCreateWithoutTenantInput_1 = require("../inputs/BillingCreateWithoutTenantInput");
const BillingUpdateWithoutTenantInput_1 = require("../inputs/BillingUpdateWithoutTenantInput");
const BillingUpsertWithoutTenantInput_1 = require("../inputs/BillingUpsertWithoutTenantInput");
const BillingWhereUniqueInput_1 = require("../inputs/BillingWhereUniqueInput");
let BillingUpdateOneWithoutTenantInput = class BillingUpdateOneWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingCreateWithoutTenantInput_1.BillingCreateWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingCreateWithoutTenantInput_1.BillingCreateWithoutTenantInput)
], BillingUpdateOneWithoutTenantInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingCreateOrConnectWithoutTenantInput_1.BillingCreateOrConnectWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingCreateOrConnectWithoutTenantInput_1.BillingCreateOrConnectWithoutTenantInput)
], BillingUpdateOneWithoutTenantInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingUpsertWithoutTenantInput_1.BillingUpsertWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingUpsertWithoutTenantInput_1.BillingUpsertWithoutTenantInput)
], BillingUpdateOneWithoutTenantInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], BillingUpdateOneWithoutTenantInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], BillingUpdateOneWithoutTenantInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingWhereUniqueInput_1.BillingWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingWhereUniqueInput_1.BillingWhereUniqueInput)
], BillingUpdateOneWithoutTenantInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingUpdateWithoutTenantInput_1.BillingUpdateWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingUpdateWithoutTenantInput_1.BillingUpdateWithoutTenantInput)
], BillingUpdateOneWithoutTenantInput.prototype, "update", void 0);
BillingUpdateOneWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BillingUpdateOneWithoutTenantInput", {
        isAbstract: true
    })
], BillingUpdateOneWithoutTenantInput);
exports.BillingUpdateOneWithoutTenantInput = BillingUpdateOneWithoutTenantInput;
