"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueOrderLineItemArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemWhereUniqueInput_1 = require("../../../inputs/OrderLineItemWhereUniqueInput");
let FindUniqueOrderLineItemArgs = class FindUniqueOrderLineItemArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput)
], FindUniqueOrderLineItemArgs.prototype, "where", void 0);
FindUniqueOrderLineItemArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueOrderLineItemArgs);
exports.FindUniqueOrderLineItemArgs = FindUniqueOrderLineItemArgs;
