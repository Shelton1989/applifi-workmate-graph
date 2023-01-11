"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantUpdateOneRequiredWithoutBookingOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TenantCreateOrConnectWithoutBookingOrdersInput_1 = require("../inputs/TenantCreateOrConnectWithoutBookingOrdersInput");
const TenantCreateWithoutBookingOrdersInput_1 = require("../inputs/TenantCreateWithoutBookingOrdersInput");
const TenantUpdateWithoutBookingOrdersInput_1 = require("../inputs/TenantUpdateWithoutBookingOrdersInput");
const TenantUpsertWithoutBookingOrdersInput_1 = require("../inputs/TenantUpsertWithoutBookingOrdersInput");
const TenantWhereUniqueInput_1 = require("../inputs/TenantWhereUniqueInput");
let TenantUpdateOneRequiredWithoutBookingOrdersInput = class TenantUpdateOneRequiredWithoutBookingOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateWithoutBookingOrdersInput_1.TenantCreateWithoutBookingOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCreateWithoutBookingOrdersInput_1.TenantCreateWithoutBookingOrdersInput)
], TenantUpdateOneRequiredWithoutBookingOrdersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateOrConnectWithoutBookingOrdersInput_1.TenantCreateOrConnectWithoutBookingOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCreateOrConnectWithoutBookingOrdersInput_1.TenantCreateOrConnectWithoutBookingOrdersInput)
], TenantUpdateOneRequiredWithoutBookingOrdersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpsertWithoutBookingOrdersInput_1.TenantUpsertWithoutBookingOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantUpsertWithoutBookingOrdersInput_1.TenantUpsertWithoutBookingOrdersInput)
], TenantUpdateOneRequiredWithoutBookingOrdersInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantWhereUniqueInput_1.TenantWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantWhereUniqueInput_1.TenantWhereUniqueInput)
], TenantUpdateOneRequiredWithoutBookingOrdersInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpdateWithoutBookingOrdersInput_1.TenantUpdateWithoutBookingOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantUpdateWithoutBookingOrdersInput_1.TenantUpdateWithoutBookingOrdersInput)
], TenantUpdateOneRequiredWithoutBookingOrdersInput.prototype, "update", void 0);
TenantUpdateOneRequiredWithoutBookingOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantUpdateOneRequiredWithoutBookingOrdersInput", {
        isAbstract: true
    })
], TenantUpdateOneRequiredWithoutBookingOrdersInput);
exports.TenantUpdateOneRequiredWithoutBookingOrdersInput = TenantUpdateOneRequiredWithoutBookingOrdersInput;
