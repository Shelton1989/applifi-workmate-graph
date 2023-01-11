"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceCreateNestedOneWithoutBookingLineItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriceCreateOrConnectWithoutBookingLineItemsInput_1 = require("../inputs/PriceCreateOrConnectWithoutBookingLineItemsInput");
const PriceCreateWithoutBookingLineItemsInput_1 = require("../inputs/PriceCreateWithoutBookingLineItemsInput");
const PriceWhereUniqueInput_1 = require("../inputs/PriceWhereUniqueInput");
let PriceCreateNestedOneWithoutBookingLineItemsInput = class PriceCreateNestedOneWithoutBookingLineItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateWithoutBookingLineItemsInput_1.PriceCreateWithoutBookingLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceCreateWithoutBookingLineItemsInput_1.PriceCreateWithoutBookingLineItemsInput)
], PriceCreateNestedOneWithoutBookingLineItemsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateOrConnectWithoutBookingLineItemsInput_1.PriceCreateOrConnectWithoutBookingLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceCreateOrConnectWithoutBookingLineItemsInput_1.PriceCreateOrConnectWithoutBookingLineItemsInput)
], PriceCreateNestedOneWithoutBookingLineItemsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceWhereUniqueInput_1.PriceWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceWhereUniqueInput_1.PriceWhereUniqueInput)
], PriceCreateNestedOneWithoutBookingLineItemsInput.prototype, "connect", void 0);
PriceCreateNestedOneWithoutBookingLineItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceCreateNestedOneWithoutBookingLineItemsInput", {
        isAbstract: true
    })
], PriceCreateNestedOneWithoutBookingLineItemsInput);
exports.PriceCreateNestedOneWithoutBookingLineItemsInput = PriceCreateNestedOneWithoutBookingLineItemsInput;
