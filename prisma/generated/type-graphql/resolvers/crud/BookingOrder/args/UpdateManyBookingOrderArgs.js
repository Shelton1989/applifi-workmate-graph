"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyBookingOrderArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderUpdateManyMutationInput_1 = require("../../../inputs/BookingOrderUpdateManyMutationInput");
const BookingOrderWhereInput_1 = require("../../../inputs/BookingOrderWhereInput");
let UpdateManyBookingOrderArgs = class UpdateManyBookingOrderArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderUpdateManyMutationInput_1.BookingOrderUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderUpdateManyMutationInput_1.BookingOrderUpdateManyMutationInput)
], UpdateManyBookingOrderArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderWhereInput_1.BookingOrderWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderWhereInput_1.BookingOrderWhereInput)
], UpdateManyBookingOrderArgs.prototype, "where", void 0);
UpdateManyBookingOrderArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyBookingOrderArgs);
exports.UpdateManyBookingOrderArgs = UpdateManyBookingOrderArgs;
