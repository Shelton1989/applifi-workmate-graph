"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantCreateNestedOneWithoutBookingOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TenantCreateOrConnectWithoutBookingOrdersInput_1 = require("../inputs/TenantCreateOrConnectWithoutBookingOrdersInput");
const TenantCreateWithoutBookingOrdersInput_1 = require("../inputs/TenantCreateWithoutBookingOrdersInput");
const TenantWhereUniqueInput_1 = require("../inputs/TenantWhereUniqueInput");
let TenantCreateNestedOneWithoutBookingOrdersInput = class TenantCreateNestedOneWithoutBookingOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateWithoutBookingOrdersInput_1.TenantCreateWithoutBookingOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCreateWithoutBookingOrdersInput_1.TenantCreateWithoutBookingOrdersInput)
], TenantCreateNestedOneWithoutBookingOrdersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateOrConnectWithoutBookingOrdersInput_1.TenantCreateOrConnectWithoutBookingOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCreateOrConnectWithoutBookingOrdersInput_1.TenantCreateOrConnectWithoutBookingOrdersInput)
], TenantCreateNestedOneWithoutBookingOrdersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantWhereUniqueInput_1.TenantWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantWhereUniqueInput_1.TenantWhereUniqueInput)
], TenantCreateNestedOneWithoutBookingOrdersInput.prototype, "connect", void 0);
TenantCreateNestedOneWithoutBookingOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantCreateNestedOneWithoutBookingOrdersInput", {
        isAbstract: true
    })
], TenantCreateNestedOneWithoutBookingOrdersInput);
exports.TenantCreateNestedOneWithoutBookingOrdersInput = TenantCreateNestedOneWithoutBookingOrdersInput;
