"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingCreateOrConnectWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillingCreateWithoutTenantInput_1 = require("../inputs/BillingCreateWithoutTenantInput");
const BillingWhereUniqueInput_1 = require("../inputs/BillingWhereUniqueInput");
let BillingCreateOrConnectWithoutTenantInput = class BillingCreateOrConnectWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingWhereUniqueInput_1.BillingWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BillingWhereUniqueInput_1.BillingWhereUniqueInput)
], BillingCreateOrConnectWithoutTenantInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingCreateWithoutTenantInput_1.BillingCreateWithoutTenantInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BillingCreateWithoutTenantInput_1.BillingCreateWithoutTenantInput)
], BillingCreateOrConnectWithoutTenantInput.prototype, "create", void 0);
BillingCreateOrConnectWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BillingCreateOrConnectWithoutTenantInput", {
        isAbstract: true
    })
], BillingCreateOrConnectWithoutTenantInput);
exports.BillingCreateOrConnectWithoutTenantInput = BillingCreateOrConnectWithoutTenantInput;
