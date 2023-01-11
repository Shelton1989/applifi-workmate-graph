"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantCreateOrConnectWithoutBookingOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TenantCreateWithoutBookingOrdersInput_1 = require("../inputs/TenantCreateWithoutBookingOrdersInput");
const TenantWhereUniqueInput_1 = require("../inputs/TenantWhereUniqueInput");
let TenantCreateOrConnectWithoutBookingOrdersInput = class TenantCreateOrConnectWithoutBookingOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantWhereUniqueInput_1.TenantWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantWhereUniqueInput_1.TenantWhereUniqueInput)
], TenantCreateOrConnectWithoutBookingOrdersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateWithoutBookingOrdersInput_1.TenantCreateWithoutBookingOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantCreateWithoutBookingOrdersInput_1.TenantCreateWithoutBookingOrdersInput)
], TenantCreateOrConnectWithoutBookingOrdersInput.prototype, "create", void 0);
TenantCreateOrConnectWithoutBookingOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantCreateOrConnectWithoutBookingOrdersInput", {
        isAbstract: true
    })
], TenantCreateOrConnectWithoutBookingOrdersInput);
exports.TenantCreateOrConnectWithoutBookingOrdersInput = TenantCreateOrConnectWithoutBookingOrdersInput;
