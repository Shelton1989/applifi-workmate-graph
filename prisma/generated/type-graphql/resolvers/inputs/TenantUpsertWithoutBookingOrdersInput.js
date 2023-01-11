"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantUpsertWithoutBookingOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TenantCreateWithoutBookingOrdersInput_1 = require("../inputs/TenantCreateWithoutBookingOrdersInput");
const TenantUpdateWithoutBookingOrdersInput_1 = require("../inputs/TenantUpdateWithoutBookingOrdersInput");
let TenantUpsertWithoutBookingOrdersInput = class TenantUpsertWithoutBookingOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpdateWithoutBookingOrdersInput_1.TenantUpdateWithoutBookingOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantUpdateWithoutBookingOrdersInput_1.TenantUpdateWithoutBookingOrdersInput)
], TenantUpsertWithoutBookingOrdersInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateWithoutBookingOrdersInput_1.TenantCreateWithoutBookingOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantCreateWithoutBookingOrdersInput_1.TenantCreateWithoutBookingOrdersInput)
], TenantUpsertWithoutBookingOrdersInput.prototype, "create", void 0);
TenantUpsertWithoutBookingOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantUpsertWithoutBookingOrdersInput", {
        isAbstract: true
    })
], TenantUpsertWithoutBookingOrdersInput);
exports.TenantUpsertWithoutBookingOrdersInput = TenantUpsertWithoutBookingOrdersInput;
