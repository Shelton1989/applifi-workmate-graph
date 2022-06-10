"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemUpdateWithWhereUniqueWithoutOrderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemUpdateWithoutOrderInput_1 = require("../inputs/OrderLineItemUpdateWithoutOrderInput");
const OrderLineItemWhereUniqueInput_1 = require("../inputs/OrderLineItemWhereUniqueInput");
let OrderLineItemUpdateWithWhereUniqueWithoutOrderInput = class OrderLineItemUpdateWithWhereUniqueWithoutOrderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput)
], OrderLineItemUpdateWithWhereUniqueWithoutOrderInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemUpdateWithoutOrderInput_1.OrderLineItemUpdateWithoutOrderInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemUpdateWithoutOrderInput_1.OrderLineItemUpdateWithoutOrderInput)
], OrderLineItemUpdateWithWhereUniqueWithoutOrderInput.prototype, "data", void 0);
OrderLineItemUpdateWithWhereUniqueWithoutOrderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemUpdateWithWhereUniqueWithoutOrderInput", {
        isAbstract: true
    })
], OrderLineItemUpdateWithWhereUniqueWithoutOrderInput);
exports.OrderLineItemUpdateWithWhereUniqueWithoutOrderInput = OrderLineItemUpdateWithWhereUniqueWithoutOrderInput;
