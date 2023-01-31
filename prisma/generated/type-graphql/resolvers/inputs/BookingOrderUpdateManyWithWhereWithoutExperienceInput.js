"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderUpdateManyWithWhereWithoutExperienceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderScalarWhereInput_1 = require("../inputs/BookingOrderScalarWhereInput");
const BookingOrderUpdateManyMutationInput_1 = require("../inputs/BookingOrderUpdateManyMutationInput");
let BookingOrderUpdateManyWithWhereWithoutExperienceInput = class BookingOrderUpdateManyWithWhereWithoutExperienceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderScalarWhereInput_1.BookingOrderScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderScalarWhereInput_1.BookingOrderScalarWhereInput)
], BookingOrderUpdateManyWithWhereWithoutExperienceInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderUpdateManyMutationInput_1.BookingOrderUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderUpdateManyMutationInput_1.BookingOrderUpdateManyMutationInput)
], BookingOrderUpdateManyWithWhereWithoutExperienceInput.prototype, "data", void 0);
BookingOrderUpdateManyWithWhereWithoutExperienceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderUpdateManyWithWhereWithoutExperienceInput", {
        isAbstract: true
    })
], BookingOrderUpdateManyWithWhereWithoutExperienceInput);
exports.BookingOrderUpdateManyWithWhereWithoutExperienceInput = BookingOrderUpdateManyWithWhereWithoutExperienceInput;
