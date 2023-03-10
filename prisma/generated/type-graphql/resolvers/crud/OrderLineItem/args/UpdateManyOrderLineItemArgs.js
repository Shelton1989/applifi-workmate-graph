"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyOrderLineItemArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemUpdateManyMutationInput_1 = require("../../../inputs/OrderLineItemUpdateManyMutationInput");
const OrderLineItemWhereInput_1 = require("../../../inputs/OrderLineItemWhereInput");
let UpdateManyOrderLineItemArgs = class UpdateManyOrderLineItemArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemUpdateManyMutationInput_1.OrderLineItemUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemUpdateManyMutationInput_1.OrderLineItemUpdateManyMutationInput)
], UpdateManyOrderLineItemArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemWhereInput_1.OrderLineItemWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemWhereInput_1.OrderLineItemWhereInput)
], UpdateManyOrderLineItemArgs.prototype, "where", void 0);
UpdateManyOrderLineItemArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyOrderLineItemArgs);
exports.UpdateManyOrderLineItemArgs = UpdateManyOrderLineItemArgs;
