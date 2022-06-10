"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpdateWithWhereUniqueWithoutSelectedShippingAddressInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderUpdateWithoutSelectedShippingAddressInput_1 = require("../inputs/OrderUpdateWithoutSelectedShippingAddressInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderUpdateWithWhereUniqueWithoutSelectedShippingAddressInput = class OrderUpdateWithWhereUniqueWithoutSelectedShippingAddressInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], OrderUpdateWithWhereUniqueWithoutSelectedShippingAddressInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateWithoutSelectedShippingAddressInput_1.OrderUpdateWithoutSelectedShippingAddressInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderUpdateWithoutSelectedShippingAddressInput_1.OrderUpdateWithoutSelectedShippingAddressInput)
], OrderUpdateWithWhereUniqueWithoutSelectedShippingAddressInput.prototype, "data", void 0);
OrderUpdateWithWhereUniqueWithoutSelectedShippingAddressInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpdateWithWhereUniqueWithoutSelectedShippingAddressInput", {
        isAbstract: true
    })
], OrderUpdateWithWhereUniqueWithoutSelectedShippingAddressInput);
exports.OrderUpdateWithWhereUniqueWithoutSelectedShippingAddressInput = OrderUpdateWithWhereUniqueWithoutSelectedShippingAddressInput;
