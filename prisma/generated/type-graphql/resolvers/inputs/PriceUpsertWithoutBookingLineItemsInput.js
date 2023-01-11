"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceUpsertWithoutBookingLineItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriceCreateWithoutBookingLineItemsInput_1 = require("../inputs/PriceCreateWithoutBookingLineItemsInput");
const PriceUpdateWithoutBookingLineItemsInput_1 = require("../inputs/PriceUpdateWithoutBookingLineItemsInput");
let PriceUpsertWithoutBookingLineItemsInput = class PriceUpsertWithoutBookingLineItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceUpdateWithoutBookingLineItemsInput_1.PriceUpdateWithoutBookingLineItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriceUpdateWithoutBookingLineItemsInput_1.PriceUpdateWithoutBookingLineItemsInput)
], PriceUpsertWithoutBookingLineItemsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateWithoutBookingLineItemsInput_1.PriceCreateWithoutBookingLineItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriceCreateWithoutBookingLineItemsInput_1.PriceCreateWithoutBookingLineItemsInput)
], PriceUpsertWithoutBookingLineItemsInput.prototype, "create", void 0);
PriceUpsertWithoutBookingLineItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceUpsertWithoutBookingLineItemsInput", {
        isAbstract: true
    })
], PriceUpsertWithoutBookingLineItemsInput);
exports.PriceUpsertWithoutBookingLineItemsInput = PriceUpsertWithoutBookingLineItemsInput;
