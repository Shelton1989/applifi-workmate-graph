"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemUpdateManyWithWhereWithoutOrderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemScalarWhereInput_1 = require("../inputs/OrderLineItemScalarWhereInput");
const OrderLineItemUpdateManyMutationInput_1 = require("../inputs/OrderLineItemUpdateManyMutationInput");
let OrderLineItemUpdateManyWithWhereWithoutOrderInput = class OrderLineItemUpdateManyWithWhereWithoutOrderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemScalarWhereInput_1.OrderLineItemScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemScalarWhereInput_1.OrderLineItemScalarWhereInput)
], OrderLineItemUpdateManyWithWhereWithoutOrderInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemUpdateManyMutationInput_1.OrderLineItemUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemUpdateManyMutationInput_1.OrderLineItemUpdateManyMutationInput)
], OrderLineItemUpdateManyWithWhereWithoutOrderInput.prototype, "data", void 0);
OrderLineItemUpdateManyWithWhereWithoutOrderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemUpdateManyWithWhereWithoutOrderInput", {
        isAbstract: true
    })
], OrderLineItemUpdateManyWithWhereWithoutOrderInput);
exports.OrderLineItemUpdateManyWithWhereWithoutOrderInput = OrderLineItemUpdateManyWithWhereWithoutOrderInput;
