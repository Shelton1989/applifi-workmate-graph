"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBookingOrderArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderUpdateInput_1 = require("../../../inputs/BookingOrderUpdateInput");
const BookingOrderWhereUniqueInput_1 = require("../../../inputs/BookingOrderWhereUniqueInput");
let UpdateBookingOrderArgs = class UpdateBookingOrderArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderUpdateInput_1.BookingOrderUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderUpdateInput_1.BookingOrderUpdateInput)
], UpdateBookingOrderArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput)
], UpdateBookingOrderArgs.prototype, "where", void 0);
UpdateBookingOrderArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateBookingOrderArgs);
exports.UpdateBookingOrderArgs = UpdateBookingOrderArgs;
