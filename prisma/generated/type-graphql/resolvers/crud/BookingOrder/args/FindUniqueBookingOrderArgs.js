"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueBookingOrderArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderWhereUniqueInput_1 = require("../../../inputs/BookingOrderWhereUniqueInput");
let FindUniqueBookingOrderArgs = class FindUniqueBookingOrderArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput)
], FindUniqueBookingOrderArgs.prototype, "where", void 0);
FindUniqueBookingOrderArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueBookingOrderArgs);
exports.FindUniqueBookingOrderArgs = FindUniqueBookingOrderArgs;
