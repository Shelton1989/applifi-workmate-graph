"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemUpsertWithWhereUniqueWithoutSelectedProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateWithoutSelectedProductInput_1 = require("../inputs/OrderLineItemCreateWithoutSelectedProductInput");
const OrderLineItemUpdateWithoutSelectedProductInput_1 = require("../inputs/OrderLineItemUpdateWithoutSelectedProductInput");
const OrderLineItemWhereUniqueInput_1 = require("../inputs/OrderLineItemWhereUniqueInput");
let OrderLineItemUpsertWithWhereUniqueWithoutSelectedProductInput = class OrderLineItemUpsertWithWhereUniqueWithoutSelectedProductInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput)
], OrderLineItemUpsertWithWhereUniqueWithoutSelectedProductInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemUpdateWithoutSelectedProductInput_1.OrderLineItemUpdateWithoutSelectedProductInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemUpdateWithoutSelectedProductInput_1.OrderLineItemUpdateWithoutSelectedProductInput)
], OrderLineItemUpsertWithWhereUniqueWithoutSelectedProductInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateWithoutSelectedProductInput_1.OrderLineItemCreateWithoutSelectedProductInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateWithoutSelectedProductInput_1.OrderLineItemCreateWithoutSelectedProductInput)
], OrderLineItemUpsertWithWhereUniqueWithoutSelectedProductInput.prototype, "create", void 0);
OrderLineItemUpsertWithWhereUniqueWithoutSelectedProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemUpsertWithWhereUniqueWithoutSelectedProductInput", {
        isAbstract: true
    })
], OrderLineItemUpsertWithWhereUniqueWithoutSelectedProductInput);
exports.OrderLineItemUpsertWithWhereUniqueWithoutSelectedProductInput = OrderLineItemUpsertWithWhereUniqueWithoutSelectedProductInput;
