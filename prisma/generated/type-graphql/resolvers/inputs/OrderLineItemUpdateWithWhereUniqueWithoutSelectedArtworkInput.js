"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemUpdateWithWhereUniqueWithoutSelectedArtworkInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemUpdateWithoutSelectedArtworkInput_1 = require("../inputs/OrderLineItemUpdateWithoutSelectedArtworkInput");
const OrderLineItemWhereUniqueInput_1 = require("../inputs/OrderLineItemWhereUniqueInput");
let OrderLineItemUpdateWithWhereUniqueWithoutSelectedArtworkInput = class OrderLineItemUpdateWithWhereUniqueWithoutSelectedArtworkInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput)
], OrderLineItemUpdateWithWhereUniqueWithoutSelectedArtworkInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemUpdateWithoutSelectedArtworkInput_1.OrderLineItemUpdateWithoutSelectedArtworkInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemUpdateWithoutSelectedArtworkInput_1.OrderLineItemUpdateWithoutSelectedArtworkInput)
], OrderLineItemUpdateWithWhereUniqueWithoutSelectedArtworkInput.prototype, "data", void 0);
OrderLineItemUpdateWithWhereUniqueWithoutSelectedArtworkInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemUpdateWithWhereUniqueWithoutSelectedArtworkInput", {
        isAbstract: true
    })
], OrderLineItemUpdateWithWhereUniqueWithoutSelectedArtworkInput);
exports.OrderLineItemUpdateWithWhereUniqueWithoutSelectedArtworkInput = OrderLineItemUpdateWithWhereUniqueWithoutSelectedArtworkInput;
