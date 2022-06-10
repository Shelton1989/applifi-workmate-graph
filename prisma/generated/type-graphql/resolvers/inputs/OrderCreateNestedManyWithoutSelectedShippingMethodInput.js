"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateNestedManyWithoutSelectedShippingMethodInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateManySelectedShippingMethodInputEnvelope_1 = require("../inputs/OrderCreateManySelectedShippingMethodInputEnvelope");
const OrderCreateOrConnectWithoutSelectedShippingMethodInput_1 = require("../inputs/OrderCreateOrConnectWithoutSelectedShippingMethodInput");
const OrderCreateWithoutSelectedShippingMethodInput_1 = require("../inputs/OrderCreateWithoutSelectedShippingMethodInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderCreateNestedManyWithoutSelectedShippingMethodInput = class OrderCreateNestedManyWithoutSelectedShippingMethodInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateWithoutSelectedShippingMethodInput_1.OrderCreateWithoutSelectedShippingMethodInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderCreateNestedManyWithoutSelectedShippingMethodInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutSelectedShippingMethodInput_1.OrderCreateOrConnectWithoutSelectedShippingMethodInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderCreateNestedManyWithoutSelectedShippingMethodInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateManySelectedShippingMethodInputEnvelope_1.OrderCreateManySelectedShippingMethodInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateManySelectedShippingMethodInputEnvelope_1.OrderCreateManySelectedShippingMethodInputEnvelope)
], OrderCreateNestedManyWithoutSelectedShippingMethodInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderCreateNestedManyWithoutSelectedShippingMethodInput.prototype, "connect", void 0);
OrderCreateNestedManyWithoutSelectedShippingMethodInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateNestedManyWithoutSelectedShippingMethodInput", {
        isAbstract: true
    })
], OrderCreateNestedManyWithoutSelectedShippingMethodInput);
exports.OrderCreateNestedManyWithoutSelectedShippingMethodInput = OrderCreateNestedManyWithoutSelectedShippingMethodInput;
