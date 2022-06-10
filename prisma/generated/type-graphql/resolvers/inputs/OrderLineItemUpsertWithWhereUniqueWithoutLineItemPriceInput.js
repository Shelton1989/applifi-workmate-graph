"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemUpsertWithWhereUniqueWithoutLineItemPriceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateWithoutLineItemPriceInput_1 = require("../inputs/OrderLineItemCreateWithoutLineItemPriceInput");
const OrderLineItemUpdateWithoutLineItemPriceInput_1 = require("../inputs/OrderLineItemUpdateWithoutLineItemPriceInput");
const OrderLineItemWhereUniqueInput_1 = require("../inputs/OrderLineItemWhereUniqueInput");
let OrderLineItemUpsertWithWhereUniqueWithoutLineItemPriceInput = class OrderLineItemUpsertWithWhereUniqueWithoutLineItemPriceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput)
], OrderLineItemUpsertWithWhereUniqueWithoutLineItemPriceInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemUpdateWithoutLineItemPriceInput_1.OrderLineItemUpdateWithoutLineItemPriceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemUpdateWithoutLineItemPriceInput_1.OrderLineItemUpdateWithoutLineItemPriceInput)
], OrderLineItemUpsertWithWhereUniqueWithoutLineItemPriceInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateWithoutLineItemPriceInput_1.OrderLineItemCreateWithoutLineItemPriceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateWithoutLineItemPriceInput_1.OrderLineItemCreateWithoutLineItemPriceInput)
], OrderLineItemUpsertWithWhereUniqueWithoutLineItemPriceInput.prototype, "create", void 0);
OrderLineItemUpsertWithWhereUniqueWithoutLineItemPriceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemUpsertWithWhereUniqueWithoutLineItemPriceInput", {
        isAbstract: true
    })
], OrderLineItemUpsertWithWhereUniqueWithoutLineItemPriceInput);
exports.OrderLineItemUpsertWithWhereUniqueWithoutLineItemPriceInput = OrderLineItemUpsertWithWhereUniqueWithoutLineItemPriceInput;
