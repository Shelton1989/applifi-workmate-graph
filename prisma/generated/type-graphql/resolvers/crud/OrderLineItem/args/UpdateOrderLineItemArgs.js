"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrderLineItemArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemUpdateInput_1 = require("../../../inputs/OrderLineItemUpdateInput");
const OrderLineItemWhereUniqueInput_1 = require("../../../inputs/OrderLineItemWhereUniqueInput");
let UpdateOrderLineItemArgs = class UpdateOrderLineItemArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemUpdateInput_1.OrderLineItemUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemUpdateInput_1.OrderLineItemUpdateInput)
], UpdateOrderLineItemArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput)
], UpdateOrderLineItemArgs.prototype, "where", void 0);
UpdateOrderLineItemArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOrderLineItemArgs);
exports.UpdateOrderLineItemArgs = UpdateOrderLineItemArgs;
