"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateOrConnectWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateWithoutTenantInput_1 = require("../inputs/OrderCreateWithoutTenantInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderCreateOrConnectWithoutTenantInput = class OrderCreateOrConnectWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], OrderCreateOrConnectWithoutTenantInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateWithoutTenantInput_1.OrderCreateWithoutTenantInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderCreateWithoutTenantInput_1.OrderCreateWithoutTenantInput)
], OrderCreateOrConnectWithoutTenantInput.prototype, "create", void 0);
OrderCreateOrConnectWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateOrConnectWithoutTenantInput", {
        isAbstract: true
    })
], OrderCreateOrConnectWithoutTenantInput);
exports.OrderCreateOrConnectWithoutTenantInput = OrderCreateOrConnectWithoutTenantInput;
