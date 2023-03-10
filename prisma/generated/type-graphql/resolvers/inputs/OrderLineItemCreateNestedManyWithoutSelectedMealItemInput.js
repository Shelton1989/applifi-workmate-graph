"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemCreateNestedManyWithoutSelectedMealItemInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateManySelectedMealItemInputEnvelope_1 = require("../inputs/OrderLineItemCreateManySelectedMealItemInputEnvelope");
const OrderLineItemCreateOrConnectWithoutSelectedMealItemInput_1 = require("../inputs/OrderLineItemCreateOrConnectWithoutSelectedMealItemInput");
const OrderLineItemCreateWithoutSelectedMealItemInput_1 = require("../inputs/OrderLineItemCreateWithoutSelectedMealItemInput");
const OrderLineItemWhereUniqueInput_1 = require("../inputs/OrderLineItemWhereUniqueInput");
let OrderLineItemCreateNestedManyWithoutSelectedMealItemInput = class OrderLineItemCreateNestedManyWithoutSelectedMealItemInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemCreateWithoutSelectedMealItemInput_1.OrderLineItemCreateWithoutSelectedMealItemInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemCreateNestedManyWithoutSelectedMealItemInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemCreateOrConnectWithoutSelectedMealItemInput_1.OrderLineItemCreateOrConnectWithoutSelectedMealItemInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemCreateNestedManyWithoutSelectedMealItemInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateManySelectedMealItemInputEnvelope_1.OrderLineItemCreateManySelectedMealItemInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateManySelectedMealItemInputEnvelope_1.OrderLineItemCreateManySelectedMealItemInputEnvelope)
], OrderLineItemCreateNestedManyWithoutSelectedMealItemInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemCreateNestedManyWithoutSelectedMealItemInput.prototype, "connect", void 0);
OrderLineItemCreateNestedManyWithoutSelectedMealItemInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemCreateNestedManyWithoutSelectedMealItemInput", {
        isAbstract: true
    })
], OrderLineItemCreateNestedManyWithoutSelectedMealItemInput);
exports.OrderLineItemCreateNestedManyWithoutSelectedMealItemInput = OrderLineItemCreateNestedManyWithoutSelectedMealItemInput;
