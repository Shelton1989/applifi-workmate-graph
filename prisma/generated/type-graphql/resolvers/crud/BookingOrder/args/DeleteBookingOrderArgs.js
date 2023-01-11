"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteBookingOrderArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderWhereUniqueInput_1 = require("../../../inputs/BookingOrderWhereUniqueInput");
let DeleteBookingOrderArgs = class DeleteBookingOrderArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput)
], DeleteBookingOrderArgs.prototype, "where", void 0);
DeleteBookingOrderArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteBookingOrderArgs);
exports.DeleteBookingOrderArgs = DeleteBookingOrderArgs;
