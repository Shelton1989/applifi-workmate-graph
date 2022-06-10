"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemUpsertWithWhereUniqueWithoutOrderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateWithoutOrderInput_1 = require("../inputs/OrderLineItemCreateWithoutOrderInput");
const OrderLineItemUpdateWithoutOrderInput_1 = require("../inputs/OrderLineItemUpdateWithoutOrderInput");
const OrderLineItemWhereUniqueInput_1 = require("../inputs/OrderLineItemWhereUniqueInput");
let OrderLineItemUpsertWithWhereUniqueWithoutOrderInput = class OrderLineItemUpsertWithWhereUniqueWithoutOrderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput)
], OrderLineItemUpsertWithWhereUniqueWithoutOrderInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemUpdateWithoutOrderInput_1.OrderLineItemUpdateWithoutOrderInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemUpdateWithoutOrderInput_1.OrderLineItemUpdateWithoutOrderInput)
], OrderLineItemUpsertWithWhereUniqueWithoutOrderInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateWithoutOrderInput_1.OrderLineItemCreateWithoutOrderInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateWithoutOrderInput_1.OrderLineItemCreateWithoutOrderInput)
], OrderLineItemUpsertWithWhereUniqueWithoutOrderInput.prototype, "create", void 0);
OrderLineItemUpsertWithWhereUniqueWithoutOrderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemUpsertWithWhereUniqueWithoutOrderInput", {
        isAbstract: true
    })
], OrderLineItemUpsertWithWhereUniqueWithoutOrderInput);
exports.OrderLineItemUpsertWithWhereUniqueWithoutOrderInput = OrderLineItemUpsertWithWhereUniqueWithoutOrderInput;
