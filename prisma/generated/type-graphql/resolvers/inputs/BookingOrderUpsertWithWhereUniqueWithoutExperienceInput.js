"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderUpsertWithWhereUniqueWithoutExperienceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderCreateWithoutExperienceInput_1 = require("../inputs/BookingOrderCreateWithoutExperienceInput");
const BookingOrderUpdateWithoutExperienceInput_1 = require("../inputs/BookingOrderUpdateWithoutExperienceInput");
const BookingOrderWhereUniqueInput_1 = require("../inputs/BookingOrderWhereUniqueInput");
let BookingOrderUpsertWithWhereUniqueWithoutExperienceInput = class BookingOrderUpsertWithWhereUniqueWithoutExperienceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput)
], BookingOrderUpsertWithWhereUniqueWithoutExperienceInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderUpdateWithoutExperienceInput_1.BookingOrderUpdateWithoutExperienceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderUpdateWithoutExperienceInput_1.BookingOrderUpdateWithoutExperienceInput)
], BookingOrderUpsertWithWhereUniqueWithoutExperienceInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderCreateWithoutExperienceInput_1.BookingOrderCreateWithoutExperienceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderCreateWithoutExperienceInput_1.BookingOrderCreateWithoutExperienceInput)
], BookingOrderUpsertWithWhereUniqueWithoutExperienceInput.prototype, "create", void 0);
BookingOrderUpsertWithWhereUniqueWithoutExperienceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderUpsertWithWhereUniqueWithoutExperienceInput", {
        isAbstract: true
    })
], BookingOrderUpsertWithWhereUniqueWithoutExperienceInput);
exports.BookingOrderUpsertWithWhereUniqueWithoutExperienceInput = BookingOrderUpsertWithWhereUniqueWithoutExperienceInput;
