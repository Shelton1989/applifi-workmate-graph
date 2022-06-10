"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemUpsertWithWhereUniqueWithoutSelectedArtworkInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateWithoutSelectedArtworkInput_1 = require("../inputs/OrderLineItemCreateWithoutSelectedArtworkInput");
const OrderLineItemUpdateWithoutSelectedArtworkInput_1 = require("../inputs/OrderLineItemUpdateWithoutSelectedArtworkInput");
const OrderLineItemWhereUniqueInput_1 = require("../inputs/OrderLineItemWhereUniqueInput");
let OrderLineItemUpsertWithWhereUniqueWithoutSelectedArtworkInput = class OrderLineItemUpsertWithWhereUniqueWithoutSelectedArtworkInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput)
], OrderLineItemUpsertWithWhereUniqueWithoutSelectedArtworkInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemUpdateWithoutSelectedArtworkInput_1.OrderLineItemUpdateWithoutSelectedArtworkInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemUpdateWithoutSelectedArtworkInput_1.OrderLineItemUpdateWithoutSelectedArtworkInput)
], OrderLineItemUpsertWithWhereUniqueWithoutSelectedArtworkInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateWithoutSelectedArtworkInput_1.OrderLineItemCreateWithoutSelectedArtworkInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateWithoutSelectedArtworkInput_1.OrderLineItemCreateWithoutSelectedArtworkInput)
], OrderLineItemUpsertWithWhereUniqueWithoutSelectedArtworkInput.prototype, "create", void 0);
OrderLineItemUpsertWithWhereUniqueWithoutSelectedArtworkInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemUpsertWithWhereUniqueWithoutSelectedArtworkInput", {
        isAbstract: true
    })
], OrderLineItemUpsertWithWhereUniqueWithoutSelectedArtworkInput);
exports.OrderLineItemUpsertWithWhereUniqueWithoutSelectedArtworkInput = OrderLineItemUpsertWithWhereUniqueWithoutSelectedArtworkInput;
