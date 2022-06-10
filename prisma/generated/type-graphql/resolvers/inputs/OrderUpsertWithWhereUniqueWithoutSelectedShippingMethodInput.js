"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpsertWithWhereUniqueWithoutSelectedShippingMethodInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateWithoutSelectedShippingMethodInput_1 = require("../inputs/OrderCreateWithoutSelectedShippingMethodInput");
const OrderUpdateWithoutSelectedShippingMethodInput_1 = require("../inputs/OrderUpdateWithoutSelectedShippingMethodInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderUpsertWithWhereUniqueWithoutSelectedShippingMethodInput = class OrderUpsertWithWhereUniqueWithoutSelectedShippingMethodInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], OrderUpsertWithWhereUniqueWithoutSelectedShippingMethodInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateWithoutSelectedShippingMethodInput_1.OrderUpdateWithoutSelectedShippingMethodInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderUpdateWithoutSelectedShippingMethodInput_1.OrderUpdateWithoutSelectedShippingMethodInput)
], OrderUpsertWithWhereUniqueWithoutSelectedShippingMethodInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateWithoutSelectedShippingMethodInput_1.OrderCreateWithoutSelectedShippingMethodInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderCreateWithoutSelectedShippingMethodInput_1.OrderCreateWithoutSelectedShippingMethodInput)
], OrderUpsertWithWhereUniqueWithoutSelectedShippingMethodInput.prototype, "create", void 0);
OrderUpsertWithWhereUniqueWithoutSelectedShippingMethodInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpsertWithWhereUniqueWithoutSelectedShippingMethodInput", {
        isAbstract: true
    })
], OrderUpsertWithWhereUniqueWithoutSelectedShippingMethodInput);
exports.OrderUpsertWithWhereUniqueWithoutSelectedShippingMethodInput = OrderUpsertWithWhereUniqueWithoutSelectedShippingMethodInput;
