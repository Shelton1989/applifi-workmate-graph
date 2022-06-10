"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemCreateNestedManyWithoutSelectedArtworkInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateManySelectedArtworkInputEnvelope_1 = require("../inputs/OrderLineItemCreateManySelectedArtworkInputEnvelope");
const OrderLineItemCreateOrConnectWithoutSelectedArtworkInput_1 = require("../inputs/OrderLineItemCreateOrConnectWithoutSelectedArtworkInput");
const OrderLineItemCreateWithoutSelectedArtworkInput_1 = require("../inputs/OrderLineItemCreateWithoutSelectedArtworkInput");
const OrderLineItemWhereUniqueInput_1 = require("../inputs/OrderLineItemWhereUniqueInput");
let OrderLineItemCreateNestedManyWithoutSelectedArtworkInput = class OrderLineItemCreateNestedManyWithoutSelectedArtworkInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemCreateWithoutSelectedArtworkInput_1.OrderLineItemCreateWithoutSelectedArtworkInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemCreateNestedManyWithoutSelectedArtworkInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemCreateOrConnectWithoutSelectedArtworkInput_1.OrderLineItemCreateOrConnectWithoutSelectedArtworkInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemCreateNestedManyWithoutSelectedArtworkInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateManySelectedArtworkInputEnvelope_1.OrderLineItemCreateManySelectedArtworkInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateManySelectedArtworkInputEnvelope_1.OrderLineItemCreateManySelectedArtworkInputEnvelope)
], OrderLineItemCreateNestedManyWithoutSelectedArtworkInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemCreateNestedManyWithoutSelectedArtworkInput.prototype, "connect", void 0);
OrderLineItemCreateNestedManyWithoutSelectedArtworkInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemCreateNestedManyWithoutSelectedArtworkInput", {
        isAbstract: true
    })
], OrderLineItemCreateNestedManyWithoutSelectedArtworkInput);
exports.OrderLineItemCreateNestedManyWithoutSelectedArtworkInput = OrderLineItemCreateNestedManyWithoutSelectedArtworkInput;
