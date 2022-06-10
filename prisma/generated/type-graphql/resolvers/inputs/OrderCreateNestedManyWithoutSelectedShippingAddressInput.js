"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateNestedManyWithoutSelectedShippingAddressInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateManySelectedShippingAddressInputEnvelope_1 = require("../inputs/OrderCreateManySelectedShippingAddressInputEnvelope");
const OrderCreateOrConnectWithoutSelectedShippingAddressInput_1 = require("../inputs/OrderCreateOrConnectWithoutSelectedShippingAddressInput");
const OrderCreateWithoutSelectedShippingAddressInput_1 = require("../inputs/OrderCreateWithoutSelectedShippingAddressInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderCreateNestedManyWithoutSelectedShippingAddressInput = class OrderCreateNestedManyWithoutSelectedShippingAddressInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateWithoutSelectedShippingAddressInput_1.OrderCreateWithoutSelectedShippingAddressInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderCreateNestedManyWithoutSelectedShippingAddressInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutSelectedShippingAddressInput_1.OrderCreateOrConnectWithoutSelectedShippingAddressInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderCreateNestedManyWithoutSelectedShippingAddressInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateManySelectedShippingAddressInputEnvelope_1.OrderCreateManySelectedShippingAddressInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateManySelectedShippingAddressInputEnvelope_1.OrderCreateManySelectedShippingAddressInputEnvelope)
], OrderCreateNestedManyWithoutSelectedShippingAddressInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderCreateNestedManyWithoutSelectedShippingAddressInput.prototype, "connect", void 0);
OrderCreateNestedManyWithoutSelectedShippingAddressInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateNestedManyWithoutSelectedShippingAddressInput", {
        isAbstract: true
    })
], OrderCreateNestedManyWithoutSelectedShippingAddressInput);
exports.OrderCreateNestedManyWithoutSelectedShippingAddressInput = OrderCreateNestedManyWithoutSelectedShippingAddressInput;
