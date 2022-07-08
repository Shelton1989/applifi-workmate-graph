"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateManySellerInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateManySellerInput_1 = require("../inputs/OrderCreateManySellerInput");
let OrderCreateManySellerInputEnvelope = class OrderCreateManySellerInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateManySellerInput_1.OrderCreateManySellerInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], OrderCreateManySellerInputEnvelope.prototype, "data", void 0);
OrderCreateManySellerInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateManySellerInputEnvelope", {
        isAbstract: true
    })
], OrderCreateManySellerInputEnvelope);
exports.OrderCreateManySellerInputEnvelope = OrderCreateManySellerInputEnvelope;
