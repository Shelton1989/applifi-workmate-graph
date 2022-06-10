"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemCreateManySelectedArtworkInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateManySelectedArtworkInput_1 = require("../inputs/OrderLineItemCreateManySelectedArtworkInput");
let OrderLineItemCreateManySelectedArtworkInputEnvelope = class OrderLineItemCreateManySelectedArtworkInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemCreateManySelectedArtworkInput_1.OrderLineItemCreateManySelectedArtworkInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemCreateManySelectedArtworkInputEnvelope.prototype, "data", void 0);
OrderLineItemCreateManySelectedArtworkInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemCreateManySelectedArtworkInputEnvelope", {
        isAbstract: true
    })
], OrderLineItemCreateManySelectedArtworkInputEnvelope);
exports.OrderLineItemCreateManySelectedArtworkInputEnvelope = OrderLineItemCreateManySelectedArtworkInputEnvelope;
