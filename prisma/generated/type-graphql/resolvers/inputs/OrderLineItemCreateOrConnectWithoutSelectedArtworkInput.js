"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemCreateOrConnectWithoutSelectedArtworkInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateWithoutSelectedArtworkInput_1 = require("../inputs/OrderLineItemCreateWithoutSelectedArtworkInput");
const OrderLineItemWhereUniqueInput_1 = require("../inputs/OrderLineItemWhereUniqueInput");
let OrderLineItemCreateOrConnectWithoutSelectedArtworkInput = class OrderLineItemCreateOrConnectWithoutSelectedArtworkInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput)
], OrderLineItemCreateOrConnectWithoutSelectedArtworkInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateWithoutSelectedArtworkInput_1.OrderLineItemCreateWithoutSelectedArtworkInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateWithoutSelectedArtworkInput_1.OrderLineItemCreateWithoutSelectedArtworkInput)
], OrderLineItemCreateOrConnectWithoutSelectedArtworkInput.prototype, "create", void 0);
OrderLineItemCreateOrConnectWithoutSelectedArtworkInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemCreateOrConnectWithoutSelectedArtworkInput", {
        isAbstract: true
    })
], OrderLineItemCreateOrConnectWithoutSelectedArtworkInput);
exports.OrderLineItemCreateOrConnectWithoutSelectedArtworkInput = OrderLineItemCreateOrConnectWithoutSelectedArtworkInput;
