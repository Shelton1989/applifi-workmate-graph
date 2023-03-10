"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateNestedManyWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateManyTenantInputEnvelope_1 = require("../inputs/OrderCreateManyTenantInputEnvelope");
const OrderCreateOrConnectWithoutTenantInput_1 = require("../inputs/OrderCreateOrConnectWithoutTenantInput");
const OrderCreateWithoutTenantInput_1 = require("../inputs/OrderCreateWithoutTenantInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderCreateNestedManyWithoutTenantInput = class OrderCreateNestedManyWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateWithoutTenantInput_1.OrderCreateWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderCreateNestedManyWithoutTenantInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutTenantInput_1.OrderCreateOrConnectWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderCreateNestedManyWithoutTenantInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateManyTenantInputEnvelope_1.OrderCreateManyTenantInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateManyTenantInputEnvelope_1.OrderCreateManyTenantInputEnvelope)
], OrderCreateNestedManyWithoutTenantInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderCreateNestedManyWithoutTenantInput.prototype, "connect", void 0);
OrderCreateNestedManyWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateNestedManyWithoutTenantInput", {
        isAbstract: true
    })
], OrderCreateNestedManyWithoutTenantInput);
exports.OrderCreateNestedManyWithoutTenantInput = OrderCreateNestedManyWithoutTenantInput;
