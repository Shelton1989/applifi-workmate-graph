"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceCreateOrConnectWithoutBookingLineItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriceCreateWithoutBookingLineItemsInput_1 = require("../inputs/PriceCreateWithoutBookingLineItemsInput");
const PriceWhereUniqueInput_1 = require("../inputs/PriceWhereUniqueInput");
let PriceCreateOrConnectWithoutBookingLineItemsInput = class PriceCreateOrConnectWithoutBookingLineItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceWhereUniqueInput_1.PriceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriceWhereUniqueInput_1.PriceWhereUniqueInput)
], PriceCreateOrConnectWithoutBookingLineItemsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateWithoutBookingLineItemsInput_1.PriceCreateWithoutBookingLineItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriceCreateWithoutBookingLineItemsInput_1.PriceCreateWithoutBookingLineItemsInput)
], PriceCreateOrConnectWithoutBookingLineItemsInput.prototype, "create", void 0);
PriceCreateOrConnectWithoutBookingLineItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceCreateOrConnectWithoutBookingLineItemsInput", {
        isAbstract: true
    })
], PriceCreateOrConnectWithoutBookingLineItemsInput);
exports.PriceCreateOrConnectWithoutBookingLineItemsInput = PriceCreateOrConnectWithoutBookingLineItemsInput;
