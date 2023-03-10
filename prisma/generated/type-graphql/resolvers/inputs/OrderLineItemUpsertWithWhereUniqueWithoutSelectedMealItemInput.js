"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemUpsertWithWhereUniqueWithoutSelectedMealItemInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateWithoutSelectedMealItemInput_1 = require("../inputs/OrderLineItemCreateWithoutSelectedMealItemInput");
const OrderLineItemUpdateWithoutSelectedMealItemInput_1 = require("../inputs/OrderLineItemUpdateWithoutSelectedMealItemInput");
const OrderLineItemWhereUniqueInput_1 = require("../inputs/OrderLineItemWhereUniqueInput");
let OrderLineItemUpsertWithWhereUniqueWithoutSelectedMealItemInput = class OrderLineItemUpsertWithWhereUniqueWithoutSelectedMealItemInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput)
], OrderLineItemUpsertWithWhereUniqueWithoutSelectedMealItemInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemUpdateWithoutSelectedMealItemInput_1.OrderLineItemUpdateWithoutSelectedMealItemInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemUpdateWithoutSelectedMealItemInput_1.OrderLineItemUpdateWithoutSelectedMealItemInput)
], OrderLineItemUpsertWithWhereUniqueWithoutSelectedMealItemInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateWithoutSelectedMealItemInput_1.OrderLineItemCreateWithoutSelectedMealItemInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateWithoutSelectedMealItemInput_1.OrderLineItemCreateWithoutSelectedMealItemInput)
], OrderLineItemUpsertWithWhereUniqueWithoutSelectedMealItemInput.prototype, "create", void 0);
OrderLineItemUpsertWithWhereUniqueWithoutSelectedMealItemInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemUpsertWithWhereUniqueWithoutSelectedMealItemInput", {
        isAbstract: true
    })
], OrderLineItemUpsertWithWhereUniqueWithoutSelectedMealItemInput);
exports.OrderLineItemUpsertWithWhereUniqueWithoutSelectedMealItemInput = OrderLineItemUpsertWithWhereUniqueWithoutSelectedMealItemInput;
