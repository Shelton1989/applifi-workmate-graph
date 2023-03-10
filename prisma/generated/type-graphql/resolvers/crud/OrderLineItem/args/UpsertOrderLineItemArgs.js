"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOrderLineItemArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateInput_1 = require("../../../inputs/OrderLineItemCreateInput");
const OrderLineItemUpdateInput_1 = require("../../../inputs/OrderLineItemUpdateInput");
const OrderLineItemWhereUniqueInput_1 = require("../../../inputs/OrderLineItemWhereUniqueInput");
let UpsertOrderLineItemArgs = class UpsertOrderLineItemArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput)
], UpsertOrderLineItemArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateInput_1.OrderLineItemCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateInput_1.OrderLineItemCreateInput)
], UpsertOrderLineItemArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemUpdateInput_1.OrderLineItemUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemUpdateInput_1.OrderLineItemUpdateInput)
], UpsertOrderLineItemArgs.prototype, "update", void 0);
UpsertOrderLineItemArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOrderLineItemArgs);
exports.UpsertOrderLineItemArgs = UpsertOrderLineItemArgs;
