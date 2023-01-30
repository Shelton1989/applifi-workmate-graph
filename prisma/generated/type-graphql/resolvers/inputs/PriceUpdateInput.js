"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderLineItemUpdateManyWithoutLineItemPriceInput_1 = require("../inputs/BookingOrderLineItemUpdateManyWithoutLineItemPriceInput");
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const CurrencyUpdateOneWithoutPricesInput_1 = require("../inputs/CurrencyUpdateOneWithoutPricesInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const ExperienceUpdateOneRequiredWithoutPriceInput_1 = require("../inputs/ExperienceUpdateOneRequiredWithoutPriceInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let PriceUpdateInput = class PriceUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], PriceUpdateInput.prototype, "priceInLowestDenomination", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PriceUpdateInput.prototype, "displayPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyUpdateOneWithoutPricesInput_1.CurrencyUpdateOneWithoutPricesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrencyUpdateOneWithoutPricesInput_1.CurrencyUpdateOneWithoutPricesInput)
], PriceUpdateInput.prototype, "currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], PriceUpdateInput.prototype, "details", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceUpdateOneRequiredWithoutPriceInput_1.ExperienceUpdateOneRequiredWithoutPriceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceUpdateOneRequiredWithoutPriceInput_1.ExperienceUpdateOneRequiredWithoutPriceInput)
], PriceUpdateInput.prototype, "Experience", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemUpdateManyWithoutLineItemPriceInput_1.BookingOrderLineItemUpdateManyWithoutLineItemPriceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemUpdateManyWithoutLineItemPriceInput_1.BookingOrderLineItemUpdateManyWithoutLineItemPriceInput)
], PriceUpdateInput.prototype, "BookingLineItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], PriceUpdateInput.prototype, "isBasePrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PriceUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PriceUpdateInput.prototype, "updatedAt", void 0);
PriceUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceUpdateInput", {
        isAbstract: true
    })
], PriceUpdateInput);
exports.PriceUpdateInput = PriceUpdateInput;
