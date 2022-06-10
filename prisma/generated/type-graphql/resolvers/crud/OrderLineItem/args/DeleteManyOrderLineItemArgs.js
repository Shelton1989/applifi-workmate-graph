"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyOrderLineItemArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemWhereInput_1 = require("../../../inputs/OrderLineItemWhereInput");
let DeleteManyOrderLineItemArgs = class DeleteManyOrderLineItemArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemWhereInput_1.OrderLineItemWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemWhereInput_1.OrderLineItemWhereInput)
], DeleteManyOrderLineItemArgs.prototype, "where", void 0);
DeleteManyOrderLineItemArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyOrderLineItemArgs);
exports.DeleteManyOrderLineItemArgs = DeleteManyOrderLineItemArgs;
