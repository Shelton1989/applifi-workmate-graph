"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOrderLineItemArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemWhereUniqueInput_1 = require("../../../inputs/OrderLineItemWhereUniqueInput");
let DeleteOrderLineItemArgs = class DeleteOrderLineItemArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput)
], DeleteOrderLineItemArgs.prototype, "where", void 0);
DeleteOrderLineItemArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOrderLineItemArgs);
exports.DeleteOrderLineItemArgs = DeleteOrderLineItemArgs;
