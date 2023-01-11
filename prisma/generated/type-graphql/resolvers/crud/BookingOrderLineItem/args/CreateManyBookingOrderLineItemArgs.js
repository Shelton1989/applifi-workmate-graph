"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyBookingOrderLineItemArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderLineItemCreateManyInput_1 = require("../../../inputs/BookingOrderLineItemCreateManyInput");
let CreateManyBookingOrderLineItemArgs = class CreateManyBookingOrderLineItemArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderLineItemCreateManyInput_1.BookingOrderLineItemCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyBookingOrderLineItemArgs.prototype, "data", void 0);
CreateManyBookingOrderLineItemArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyBookingOrderLineItemArgs);
exports.CreateManyBookingOrderLineItemArgs = CreateManyBookingOrderLineItemArgs;
