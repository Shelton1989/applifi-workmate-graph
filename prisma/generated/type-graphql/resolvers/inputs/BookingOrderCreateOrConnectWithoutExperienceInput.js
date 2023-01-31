"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderCreateOrConnectWithoutExperienceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderCreateWithoutExperienceInput_1 = require("../inputs/BookingOrderCreateWithoutExperienceInput");
const BookingOrderWhereUniqueInput_1 = require("../inputs/BookingOrderWhereUniqueInput");
let BookingOrderCreateOrConnectWithoutExperienceInput = class BookingOrderCreateOrConnectWithoutExperienceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput)
], BookingOrderCreateOrConnectWithoutExperienceInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderCreateWithoutExperienceInput_1.BookingOrderCreateWithoutExperienceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderCreateWithoutExperienceInput_1.BookingOrderCreateWithoutExperienceInput)
], BookingOrderCreateOrConnectWithoutExperienceInput.prototype, "create", void 0);
BookingOrderCreateOrConnectWithoutExperienceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderCreateOrConnectWithoutExperienceInput", {
        isAbstract: true
    })
], BookingOrderCreateOrConnectWithoutExperienceInput);
exports.BookingOrderCreateOrConnectWithoutExperienceInput = BookingOrderCreateOrConnectWithoutExperienceInput;
