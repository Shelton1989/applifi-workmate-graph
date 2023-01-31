"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderCreateManyExperienceInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderCreateManyExperienceInput_1 = require("../inputs/BookingOrderCreateManyExperienceInput");
let BookingOrderCreateManyExperienceInputEnvelope = class BookingOrderCreateManyExperienceInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderCreateManyExperienceInput_1.BookingOrderCreateManyExperienceInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderCreateManyExperienceInputEnvelope.prototype, "data", void 0);
BookingOrderCreateManyExperienceInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderCreateManyExperienceInputEnvelope", {
        isAbstract: true
    })
], BookingOrderCreateManyExperienceInputEnvelope);
exports.BookingOrderCreateManyExperienceInputEnvelope = BookingOrderCreateManyExperienceInputEnvelope;
