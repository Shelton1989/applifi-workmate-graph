"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingCreateNestedOneWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillingCreateOrConnectWithoutTenantInput_1 = require("../inputs/BillingCreateOrConnectWithoutTenantInput");
const BillingCreateWithoutTenantInput_1 = require("../inputs/BillingCreateWithoutTenantInput");
const BillingWhereUniqueInput_1 = require("../inputs/BillingWhereUniqueInput");
let BillingCreateNestedOneWithoutTenantInput = class BillingCreateNestedOneWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingCreateWithoutTenantInput_1.BillingCreateWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingCreateWithoutTenantInput_1.BillingCreateWithoutTenantInput)
], BillingCreateNestedOneWithoutTenantInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingCreateOrConnectWithoutTenantInput_1.BillingCreateOrConnectWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingCreateOrConnectWithoutTenantInput_1.BillingCreateOrConnectWithoutTenantInput)
], BillingCreateNestedOneWithoutTenantInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingWhereUniqueInput_1.BillingWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingWhereUniqueInput_1.BillingWhereUniqueInput)
], BillingCreateNestedOneWithoutTenantInput.prototype, "connect", void 0);
BillingCreateNestedOneWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BillingCreateNestedOneWithoutTenantInput", {
        isAbstract: true
    })
], BillingCreateNestedOneWithoutTenantInput);
exports.BillingCreateNestedOneWithoutTenantInput = BillingCreateNestedOneWithoutTenantInput;
