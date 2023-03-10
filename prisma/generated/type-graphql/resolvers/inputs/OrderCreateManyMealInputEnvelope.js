"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateManyMealInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateManyMealInput_1 = require("../inputs/OrderCreateManyMealInput");
let OrderCreateManyMealInputEnvelope = class OrderCreateManyMealInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateManyMealInput_1.OrderCreateManyMealInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], OrderCreateManyMealInputEnvelope.prototype, "data", void 0);
OrderCreateManyMealInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateManyMealInputEnvelope", {
        isAbstract: true
    })
], OrderCreateManyMealInputEnvelope);
exports.OrderCreateManyMealInputEnvelope = OrderCreateManyMealInputEnvelope;
