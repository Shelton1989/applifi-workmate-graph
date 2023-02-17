"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderCreateManyExperienceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BOOKING_ORDER_STATUS_1 = require("../../enums/BOOKING_ORDER_STATUS");
const PAYMENT_STATUS_1 = require("../../enums/PAYMENT_STATUS");
let BookingOrderCreateManyExperienceInput = class BookingOrderCreateManyExperienceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderCreateManyExperienceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BOOKING_ORDER_STATUS_1.BOOKING_ORDER_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderCreateManyExperienceInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderCreateManyExperienceInput.prototype, "buyerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderCreateManyExperienceInput.prototype, "tenantId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PAYMENT_STATUS_1.PAYMENT_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderCreateManyExperienceInput.prototype, "PaymentStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookingOrderCreateManyExperienceInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookingOrderCreateManyExperienceInput.prototype, "updatedAt", void 0);
BookingOrderCreateManyExperienceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderCreateManyExperienceInput", {
        isAbstract: true
    })
], BookingOrderCreateManyExperienceInput);
exports.BookingOrderCreateManyExperienceInput = BookingOrderCreateManyExperienceInput;
