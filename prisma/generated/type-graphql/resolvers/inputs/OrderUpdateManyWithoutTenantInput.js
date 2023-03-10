"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpdateManyWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateManyTenantInputEnvelope_1 = require("../inputs/OrderCreateManyTenantInputEnvelope");
const OrderCreateOrConnectWithoutTenantInput_1 = require("../inputs/OrderCreateOrConnectWithoutTenantInput");
const OrderCreateWithoutTenantInput_1 = require("../inputs/OrderCreateWithoutTenantInput");
const OrderScalarWhereInput_1 = require("../inputs/OrderScalarWhereInput");
const OrderUpdateManyWithWhereWithoutTenantInput_1 = require("../inputs/OrderUpdateManyWithWhereWithoutTenantInput");
const OrderUpdateWithWhereUniqueWithoutTenantInput_1 = require("../inputs/OrderUpdateWithWhereUniqueWithoutTenantInput");
const OrderUpsertWithWhereUniqueWithoutTenantInput_1 = require("../inputs/OrderUpsertWithWhereUniqueWithoutTenantInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderUpdateManyWithoutTenantInput = class OrderUpdateManyWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateWithoutTenantInput_1.OrderCreateWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutTenantInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutTenantInput_1.OrderCreateOrConnectWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutTenantInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderUpsertWithWhereUniqueWithoutTenantInput_1.OrderUpsertWithWhereUniqueWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutTenantInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateManyTenantInputEnvelope_1.OrderCreateManyTenantInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateManyTenantInputEnvelope_1.OrderCreateManyTenantInputEnvelope)
], OrderUpdateManyWithoutTenantInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutTenantInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutTenantInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutTenantInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutTenantInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderUpdateWithWhereUniqueWithoutTenantInput_1.OrderUpdateWithWhereUniqueWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutTenantInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderUpdateManyWithWhereWithoutTenantInput_1.OrderUpdateManyWithWhereWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutTenantInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderScalarWhereInput_1.OrderScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutTenantInput.prototype, "deleteMany", void 0);
OrderUpdateManyWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpdateManyWithoutTenantInput", {
        isAbstract: true
    })
], OrderUpdateManyWithoutTenantInput);
exports.OrderUpdateManyWithoutTenantInput = OrderUpdateManyWithoutTenantInput;
