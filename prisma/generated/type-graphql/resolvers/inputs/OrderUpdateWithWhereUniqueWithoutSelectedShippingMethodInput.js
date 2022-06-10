"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpdateWithWhereUniqueWithoutSelectedShippingMethodInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderUpdateWithoutSelectedShippingMethodInput_1 = require("../inputs/OrderUpdateWithoutSelectedShippingMethodInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderUpdateWithWhereUniqueWithoutSelectedShippingMethodInput = class OrderUpdateWithWhereUniqueWithoutSelectedShippingMethodInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], OrderUpdateWithWhereUniqueWithoutSelectedShippingMethodInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateWithoutSelectedShippingMethodInput_1.OrderUpdateWithoutSelectedShippingMethodInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderUpdateWithoutSelectedShippingMethodInput_1.OrderUpdateWithoutSelectedShippingMethodInput)
], OrderUpdateWithWhereUniqueWithoutSelectedShippingMethodInput.prototype, "data", void 0);
OrderUpdateWithWhereUniqueWithoutSelectedShippingMethodInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpdateWithWhereUniqueWithoutSelectedShippingMethodInput", {
        isAbstract: true
    })
], OrderUpdateWithWhereUniqueWithoutSelectedShippingMethodInput);
exports.OrderUpdateWithWhereUniqueWithoutSelectedShippingMethodInput = OrderUpdateWithWhereUniqueWithoutSelectedShippingMethodInput;
