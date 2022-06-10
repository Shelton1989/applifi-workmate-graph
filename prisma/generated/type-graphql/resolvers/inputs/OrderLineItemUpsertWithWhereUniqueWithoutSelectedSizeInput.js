"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemUpsertWithWhereUniqueWithoutSelectedSizeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateWithoutSelectedSizeInput_1 = require("../inputs/OrderLineItemCreateWithoutSelectedSizeInput");
const OrderLineItemUpdateWithoutSelectedSizeInput_1 = require("../inputs/OrderLineItemUpdateWithoutSelectedSizeInput");
const OrderLineItemWhereUniqueInput_1 = require("../inputs/OrderLineItemWhereUniqueInput");
let OrderLineItemUpsertWithWhereUniqueWithoutSelectedSizeInput = class OrderLineItemUpsertWithWhereUniqueWithoutSelectedSizeInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput)
], OrderLineItemUpsertWithWhereUniqueWithoutSelectedSizeInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemUpdateWithoutSelectedSizeInput_1.OrderLineItemUpdateWithoutSelectedSizeInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemUpdateWithoutSelectedSizeInput_1.OrderLineItemUpdateWithoutSelectedSizeInput)
], OrderLineItemUpsertWithWhereUniqueWithoutSelectedSizeInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateWithoutSelectedSizeInput_1.OrderLineItemCreateWithoutSelectedSizeInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateWithoutSelectedSizeInput_1.OrderLineItemCreateWithoutSelectedSizeInput)
], OrderLineItemUpsertWithWhereUniqueWithoutSelectedSizeInput.prototype, "create", void 0);
OrderLineItemUpsertWithWhereUniqueWithoutSelectedSizeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemUpsertWithWhereUniqueWithoutSelectedSizeInput", {
        isAbstract: true
    })
], OrderLineItemUpsertWithWhereUniqueWithoutSelectedSizeInput);
exports.OrderLineItemUpsertWithWhereUniqueWithoutSelectedSizeInput = OrderLineItemUpsertWithWhereUniqueWithoutSelectedSizeInput;
