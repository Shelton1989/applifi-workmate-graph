"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyBookingOrderArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderCreateManyInput_1 = require("../../../inputs/BookingOrderCreateManyInput");
let CreateManyBookingOrderArgs = class CreateManyBookingOrderArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderCreateManyInput_1.BookingOrderCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyBookingOrderArgs.prototype, "data", void 0);
CreateManyBookingOrderArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyBookingOrderArgs);
exports.CreateManyBookingOrderArgs = CreateManyBookingOrderArgs;
