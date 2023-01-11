"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderCreateManyTenantInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderCreateManyTenantInput_1 = require("../inputs/BookingOrderCreateManyTenantInput");
let BookingOrderCreateManyTenantInputEnvelope = class BookingOrderCreateManyTenantInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderCreateManyTenantInput_1.BookingOrderCreateManyTenantInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderCreateManyTenantInputEnvelope.prototype, "data", void 0);
BookingOrderCreateManyTenantInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderCreateManyTenantInputEnvelope", {
        isAbstract: true
    })
], BookingOrderCreateManyTenantInputEnvelope);
exports.BookingOrderCreateManyTenantInputEnvelope = BookingOrderCreateManyTenantInputEnvelope;
