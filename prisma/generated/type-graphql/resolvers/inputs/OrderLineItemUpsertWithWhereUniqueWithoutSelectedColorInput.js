"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemUpsertWithWhereUniqueWithoutSelectedColorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateWithoutSelectedColorInput_1 = require("../inputs/OrderLineItemCreateWithoutSelectedColorInput");
const OrderLineItemUpdateWithoutSelectedColorInput_1 = require("../inputs/OrderLineItemUpdateWithoutSelectedColorInput");
const OrderLineItemWhereUniqueInput_1 = require("../inputs/OrderLineItemWhereUniqueInput");
let OrderLineItemUpsertWithWhereUniqueWithoutSelectedColorInput = class OrderLineItemUpsertWithWhereUniqueWithoutSelectedColorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput)
], OrderLineItemUpsertWithWhereUniqueWithoutSelectedColorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemUpdateWithoutSelectedColorInput_1.OrderLineItemUpdateWithoutSelectedColorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemUpdateWithoutSelectedColorInput_1.OrderLineItemUpdateWithoutSelectedColorInput)
], OrderLineItemUpsertWithWhereUniqueWithoutSelectedColorInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateWithoutSelectedColorInput_1.OrderLineItemCreateWithoutSelectedColorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateWithoutSelectedColorInput_1.OrderLineItemCreateWithoutSelectedColorInput)
], OrderLineItemUpsertWithWhereUniqueWithoutSelectedColorInput.prototype, "create", void 0);
OrderLineItemUpsertWithWhereUniqueWithoutSelectedColorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemUpsertWithWhereUniqueWithoutSelectedColorInput", {
        isAbstract: true
    })
], OrderLineItemUpsertWithWhereUniqueWithoutSelectedColorInput);
exports.OrderLineItemUpsertWithWhereUniqueWithoutSelectedColorInput = OrderLineItemUpsertWithWhereUniqueWithoutSelectedColorInput;
