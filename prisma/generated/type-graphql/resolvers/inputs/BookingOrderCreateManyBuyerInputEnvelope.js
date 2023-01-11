"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderCreateManyBuyerInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderCreateManyBuyerInput_1 = require("../inputs/BookingOrderCreateManyBuyerInput");
let BookingOrderCreateManyBuyerInputEnvelope = class BookingOrderCreateManyBuyerInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderCreateManyBuyerInput_1.BookingOrderCreateManyBuyerInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderCreateManyBuyerInputEnvelope.prototype, "data", void 0);
BookingOrderCreateManyBuyerInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderCreateManyBuyerInputEnvelope", {
        isAbstract: true
    })
], BookingOrderCreateManyBuyerInputEnvelope);
exports.BookingOrderCreateManyBuyerInputEnvelope = BookingOrderCreateManyBuyerInputEnvelope;
