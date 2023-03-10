"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpdateWithWhereUniqueWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderUpdateWithoutTenantInput_1 = require("../inputs/OrderUpdateWithoutTenantInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderUpdateWithWhereUniqueWithoutTenantInput = class OrderUpdateWithWhereUniqueWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], OrderUpdateWithWhereUniqueWithoutTenantInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateWithoutTenantInput_1.OrderUpdateWithoutTenantInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderUpdateWithoutTenantInput_1.OrderUpdateWithoutTenantInput)
], OrderUpdateWithWhereUniqueWithoutTenantInput.prototype, "data", void 0);
OrderUpdateWithWhereUniqueWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpdateWithWhereUniqueWithoutTenantInput", {
        isAbstract: true
    })
], OrderUpdateWithWhereUniqueWithoutTenantInput);
exports.OrderUpdateWithWhereUniqueWithoutTenantInput = OrderUpdateWithWhereUniqueWithoutTenantInput;
