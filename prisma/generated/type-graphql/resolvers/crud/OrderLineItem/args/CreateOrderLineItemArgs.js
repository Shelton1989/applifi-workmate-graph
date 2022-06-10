"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrderLineItemArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateInput_1 = require("../../../inputs/OrderLineItemCreateInput");
let CreateOrderLineItemArgs = class CreateOrderLineItemArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateInput_1.OrderLineItemCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateInput_1.OrderLineItemCreateInput)
], CreateOrderLineItemArgs.prototype, "data", void 0);
CreateOrderLineItemArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOrderLineItemArgs);
exports.CreateOrderLineItemArgs = CreateOrderLineItemArgs;
