"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantCreateNestedOneWithoutBillingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TenantCreateOrConnectWithoutBillingInput_1 = require("../inputs/TenantCreateOrConnectWithoutBillingInput");
const TenantCreateWithoutBillingInput_1 = require("../inputs/TenantCreateWithoutBillingInput");
const TenantWhereUniqueInput_1 = require("../inputs/TenantWhereUniqueInput");
let TenantCreateNestedOneWithoutBillingInput = class TenantCreateNestedOneWithoutBillingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateWithoutBillingInput_1.TenantCreateWithoutBillingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCreateWithoutBillingInput_1.TenantCreateWithoutBillingInput)
], TenantCreateNestedOneWithoutBillingInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateOrConnectWithoutBillingInput_1.TenantCreateOrConnectWithoutBillingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCreateOrConnectWithoutBillingInput_1.TenantCreateOrConnectWithoutBillingInput)
], TenantCreateNestedOneWithoutBillingInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantWhereUniqueInput_1.TenantWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantWhereUniqueInput_1.TenantWhereUniqueInput)
], TenantCreateNestedOneWithoutBillingInput.prototype, "connect", void 0);
TenantCreateNestedOneWithoutBillingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantCreateNestedOneWithoutBillingInput", {
        isAbstract: true
    })
], TenantCreateNestedOneWithoutBillingInput);
exports.TenantCreateNestedOneWithoutBillingInput = TenantCreateNestedOneWithoutBillingInput;
