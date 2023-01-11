"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceUpdateOneRequiredWithoutBookingLineItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriceCreateOrConnectWithoutBookingLineItemsInput_1 = require("../inputs/PriceCreateOrConnectWithoutBookingLineItemsInput");
const PriceCreateWithoutBookingLineItemsInput_1 = require("../inputs/PriceCreateWithoutBookingLineItemsInput");
const PriceUpdateWithoutBookingLineItemsInput_1 = require("../inputs/PriceUpdateWithoutBookingLineItemsInput");
const PriceUpsertWithoutBookingLineItemsInput_1 = require("../inputs/PriceUpsertWithoutBookingLineItemsInput");
const PriceWhereUniqueInput_1 = require("../inputs/PriceWhereUniqueInput");
let PriceUpdateOneRequiredWithoutBookingLineItemsInput = class PriceUpdateOneRequiredWithoutBookingLineItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateWithoutBookingLineItemsInput_1.PriceCreateWithoutBookingLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceCreateWithoutBookingLineItemsInput_1.PriceCreateWithoutBookingLineItemsInput)
], PriceUpdateOneRequiredWithoutBookingLineItemsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateOrConnectWithoutBookingLineItemsInput_1.PriceCreateOrConnectWithoutBookingLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceCreateOrConnectWithoutBookingLineItemsInput_1.PriceCreateOrConnectWithoutBookingLineItemsInput)
], PriceUpdateOneRequiredWithoutBookingLineItemsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceUpsertWithoutBookingLineItemsInput_1.PriceUpsertWithoutBookingLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceUpsertWithoutBookingLineItemsInput_1.PriceUpsertWithoutBookingLineItemsInput)
], PriceUpdateOneRequiredWithoutBookingLineItemsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceWhereUniqueInput_1.PriceWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceWhereUniqueInput_1.PriceWhereUniqueInput)
], PriceUpdateOneRequiredWithoutBookingLineItemsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceUpdateWithoutBookingLineItemsInput_1.PriceUpdateWithoutBookingLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceUpdateWithoutBookingLineItemsInput_1.PriceUpdateWithoutBookingLineItemsInput)
], PriceUpdateOneRequiredWithoutBookingLineItemsInput.prototype, "update", void 0);
PriceUpdateOneRequiredWithoutBookingLineItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceUpdateOneRequiredWithoutBookingLineItemsInput", {
        isAbstract: true
    })
], PriceUpdateOneRequiredWithoutBookingLineItemsInput);
exports.PriceUpdateOneRequiredWithoutBookingLineItemsInput = PriceUpdateOneRequiredWithoutBookingLineItemsInput;
