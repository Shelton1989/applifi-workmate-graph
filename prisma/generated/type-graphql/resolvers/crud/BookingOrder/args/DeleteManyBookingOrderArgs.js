"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyBookingOrderArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderWhereInput_1 = require("../../../inputs/BookingOrderWhereInput");
let DeleteManyBookingOrderArgs = class DeleteManyBookingOrderArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderWhereInput_1.BookingOrderWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderWhereInput_1.BookingOrderWhereInput)
], DeleteManyBookingOrderArgs.prototype, "where", void 0);
DeleteManyBookingOrderArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyBookingOrderArgs);
exports.DeleteManyBookingOrderArgs = DeleteManyBookingOrderArgs;
