"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpsertWithWhereUniqueWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateWithoutTenantInput_1 = require("../inputs/OrderCreateWithoutTenantInput");
const OrderUpdateWithoutTenantInput_1 = require("../inputs/OrderUpdateWithoutTenantInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderUpsertWithWhereUniqueWithoutTenantInput = class OrderUpsertWithWhereUniqueWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], OrderUpsertWithWhereUniqueWithoutTenantInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateWithoutTenantInput_1.OrderUpdateWithoutTenantInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderUpdateWithoutTenantInput_1.OrderUpdateWithoutTenantInput)
], OrderUpsertWithWhereUniqueWithoutTenantInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateWithoutTenantInput_1.OrderCreateWithoutTenantInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderCreateWithoutTenantInput_1.OrderCreateWithoutTenantInput)
], OrderUpsertWithWhereUniqueWithoutTenantInput.prototype, "create", void 0);
OrderUpsertWithWhereUniqueWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpsertWithWhereUniqueWithoutTenantInput", {
        isAbstract: true
    })
], OrderUpsertWithWhereUniqueWithoutTenantInput);
exports.OrderUpsertWithWhereUniqueWithoutTenantInput = OrderUpsertWithWhereUniqueWithoutTenantInput;
