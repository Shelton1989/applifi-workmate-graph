"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBookingOrderArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderCreateInput_1 = require("../../../inputs/BookingOrderCreateInput");
let CreateBookingOrderArgs = class CreateBookingOrderArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderCreateInput_1.BookingOrderCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderCreateInput_1.BookingOrderCreateInput)
], CreateBookingOrderArgs.prototype, "data", void 0);
CreateBookingOrderArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateBookingOrderArgs);
exports.CreateBookingOrderArgs = CreateBookingOrderArgs;
