"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemUpsertWithWhereUniqueWithoutSelectedMealItemOptionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateWithoutSelectedMealItemOptionInput_1 = require("../inputs/OrderLineItemCreateWithoutSelectedMealItemOptionInput");
const OrderLineItemUpdateWithoutSelectedMealItemOptionInput_1 = require("../inputs/OrderLineItemUpdateWithoutSelectedMealItemOptionInput");
const OrderLineItemWhereUniqueInput_1 = require("../inputs/OrderLineItemWhereUniqueInput");
let OrderLineItemUpsertWithWhereUniqueWithoutSelectedMealItemOptionInput = class OrderLineItemUpsertWithWhereUniqueWithoutSelectedMealItemOptionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput)
], OrderLineItemUpsertWithWhereUniqueWithoutSelectedMealItemOptionInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemUpdateWithoutSelectedMealItemOptionInput_1.OrderLineItemUpdateWithoutSelectedMealItemOptionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemUpdateWithoutSelectedMealItemOptionInput_1.OrderLineItemUpdateWithoutSelectedMealItemOptionInput)
], OrderLineItemUpsertWithWhereUniqueWithoutSelectedMealItemOptionInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateWithoutSelectedMealItemOptionInput_1.OrderLineItemCreateWithoutSelectedMealItemOptionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateWithoutSelectedMealItemOptionInput_1.OrderLineItemCreateWithoutSelectedMealItemOptionInput)
], OrderLineItemUpsertWithWhereUniqueWithoutSelectedMealItemOptionInput.prototype, "create", void 0);
OrderLineItemUpsertWithWhereUniqueWithoutSelectedMealItemOptionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemUpsertWithWhereUniqueWithoutSelectedMealItemOptionInput", {
        isAbstract: true
    })
], OrderLineItemUpsertWithWhereUniqueWithoutSelectedMealItemOptionInput);
exports.OrderLineItemUpsertWithWhereUniqueWithoutSelectedMealItemOptionInput = OrderLineItemUpsertWithWhereUniqueWithoutSelectedMealItemOptionInput;
