"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemUpdateWithWhereUniqueWithoutSelectedColorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemUpdateWithoutSelectedColorInput_1 = require("../inputs/OrderLineItemUpdateWithoutSelectedColorInput");
const OrderLineItemWhereUniqueInput_1 = require("../inputs/OrderLineItemWhereUniqueInput");
let OrderLineItemUpdateWithWhereUniqueWithoutSelectedColorInput = class OrderLineItemUpdateWithWhereUniqueWithoutSelectedColorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput)
], OrderLineItemUpdateWithWhereUniqueWithoutSelectedColorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemUpdateWithoutSelectedColorInput_1.OrderLineItemUpdateWithoutSelectedColorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemUpdateWithoutSelectedColorInput_1.OrderLineItemUpdateWithoutSelectedColorInput)
], OrderLineItemUpdateWithWhereUniqueWithoutSelectedColorInput.prototype, "data", void 0);
OrderLineItemUpdateWithWhereUniqueWithoutSelectedColorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemUpdateWithWhereUniqueWithoutSelectedColorInput", {
        isAbstract: true
    })
], OrderLineItemUpdateWithWhereUniqueWithoutSelectedColorInput);
exports.OrderLineItemUpdateWithWhereUniqueWithoutSelectedColorInput = OrderLineItemUpdateWithWhereUniqueWithoutSelectedColorInput;
