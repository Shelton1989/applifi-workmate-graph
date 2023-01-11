"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyBookingOrderLineItemArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderLineItemUpdateManyMutationInput_1 = require("../../../inputs/BookingOrderLineItemUpdateManyMutationInput");
const BookingOrderLineItemWhereInput_1 = require("../../../inputs/BookingOrderLineItemWhereInput");
let UpdateManyBookingOrderLineItemArgs = class UpdateManyBookingOrderLineItemArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemUpdateManyMutationInput_1.BookingOrderLineItemUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemUpdateManyMutationInput_1.BookingOrderLineItemUpdateManyMutationInput)
], UpdateManyBookingOrderLineItemArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemWhereInput_1.BookingOrderLineItemWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemWhereInput_1.BookingOrderLineItemWhereInput)
], UpdateManyBookingOrderLineItemArgs.prototype, "where", void 0);
UpdateManyBookingOrderLineItemArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyBookingOrderLineItemArgs);
exports.UpdateManyBookingOrderLineItemArgs = UpdateManyBookingOrderLineItemArgs;
