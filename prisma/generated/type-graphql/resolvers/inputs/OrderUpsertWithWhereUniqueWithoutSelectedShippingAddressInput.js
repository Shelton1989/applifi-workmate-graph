"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpsertWithWhereUniqueWithoutSelectedShippingAddressInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateWithoutSelectedShippingAddressInput_1 = require("../inputs/OrderCreateWithoutSelectedShippingAddressInput");
const OrderUpdateWithoutSelectedShippingAddressInput_1 = require("../inputs/OrderUpdateWithoutSelectedShippingAddressInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderUpsertWithWhereUniqueWithoutSelectedShippingAddressInput = class OrderUpsertWithWhereUniqueWithoutSelectedShippingAddressInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], OrderUpsertWithWhereUniqueWithoutSelectedShippingAddressInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateWithoutSelectedShippingAddressInput_1.OrderUpdateWithoutSelectedShippingAddressInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderUpdateWithoutSelectedShippingAddressInput_1.OrderUpdateWithoutSelectedShippingAddressInput)
], OrderUpsertWithWhereUniqueWithoutSelectedShippingAddressInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateWithoutSelectedShippingAddressInput_1.OrderCreateWithoutSelectedShippingAddressInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderCreateWithoutSelectedShippingAddressInput_1.OrderCreateWithoutSelectedShippingAddressInput)
], OrderUpsertWithWhereUniqueWithoutSelectedShippingAddressInput.prototype, "create", void 0);
OrderUpsertWithWhereUniqueWithoutSelectedShippingAddressInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpsertWithWhereUniqueWithoutSelectedShippingAddressInput", {
        isAbstract: true
    })
], OrderUpsertWithWhereUniqueWithoutSelectedShippingAddressInput);
exports.OrderUpsertWithWhereUniqueWithoutSelectedShippingAddressInput = OrderUpsertWithWhereUniqueWithoutSelectedShippingAddressInput;
