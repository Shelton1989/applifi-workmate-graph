"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantCreateOrConnectWithoutBillingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TenantCreateWithoutBillingInput_1 = require("../inputs/TenantCreateWithoutBillingInput");
const TenantWhereUniqueInput_1 = require("../inputs/TenantWhereUniqueInput");
let TenantCreateOrConnectWithoutBillingInput = class TenantCreateOrConnectWithoutBillingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantWhereUniqueInput_1.TenantWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantWhereUniqueInput_1.TenantWhereUniqueInput)
], TenantCreateOrConnectWithoutBillingInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateWithoutBillingInput_1.TenantCreateWithoutBillingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantCreateWithoutBillingInput_1.TenantCreateWithoutBillingInput)
], TenantCreateOrConnectWithoutBillingInput.prototype, "create", void 0);
TenantCreateOrConnectWithoutBillingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantCreateOrConnectWithoutBillingInput", {
        isAbstract: true
    })
], TenantCreateOrConnectWithoutBillingInput);
exports.TenantCreateOrConnectWithoutBillingInput = TenantCreateOrConnectWithoutBillingInput;
