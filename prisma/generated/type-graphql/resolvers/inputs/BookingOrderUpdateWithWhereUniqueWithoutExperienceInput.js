"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderUpdateWithWhereUniqueWithoutExperienceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderUpdateWithoutExperienceInput_1 = require("../inputs/BookingOrderUpdateWithoutExperienceInput");
const BookingOrderWhereUniqueInput_1 = require("../inputs/BookingOrderWhereUniqueInput");
let BookingOrderUpdateWithWhereUniqueWithoutExperienceInput = class BookingOrderUpdateWithWhereUniqueWithoutExperienceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput)
], BookingOrderUpdateWithWhereUniqueWithoutExperienceInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderUpdateWithoutExperienceInput_1.BookingOrderUpdateWithoutExperienceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderUpdateWithoutExperienceInput_1.BookingOrderUpdateWithoutExperienceInput)
], BookingOrderUpdateWithWhereUniqueWithoutExperienceInput.prototype, "data", void 0);
BookingOrderUpdateWithWhereUniqueWithoutExperienceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderUpdateWithWhereUniqueWithoutExperienceInput", {
        isAbstract: true
    })
], BookingOrderUpdateWithWhereUniqueWithoutExperienceInput);
exports.BookingOrderUpdateWithWhereUniqueWithoutExperienceInput = BookingOrderUpdateWithWhereUniqueWithoutExperienceInput;
