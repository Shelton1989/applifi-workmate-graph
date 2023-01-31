"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderCreateNestedManyWithoutExperienceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderCreateManyExperienceInputEnvelope_1 = require("../inputs/BookingOrderCreateManyExperienceInputEnvelope");
const BookingOrderCreateOrConnectWithoutExperienceInput_1 = require("../inputs/BookingOrderCreateOrConnectWithoutExperienceInput");
const BookingOrderCreateWithoutExperienceInput_1 = require("../inputs/BookingOrderCreateWithoutExperienceInput");
const BookingOrderWhereUniqueInput_1 = require("../inputs/BookingOrderWhereUniqueInput");
let BookingOrderCreateNestedManyWithoutExperienceInput = class BookingOrderCreateNestedManyWithoutExperienceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderCreateWithoutExperienceInput_1.BookingOrderCreateWithoutExperienceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderCreateNestedManyWithoutExperienceInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderCreateOrConnectWithoutExperienceInput_1.BookingOrderCreateOrConnectWithoutExperienceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderCreateNestedManyWithoutExperienceInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderCreateManyExperienceInputEnvelope_1.BookingOrderCreateManyExperienceInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderCreateManyExperienceInputEnvelope_1.BookingOrderCreateManyExperienceInputEnvelope)
], BookingOrderCreateNestedManyWithoutExperienceInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderCreateNestedManyWithoutExperienceInput.prototype, "connect", void 0);
BookingOrderCreateNestedManyWithoutExperienceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderCreateNestedManyWithoutExperienceInput", {
        isAbstract: true
    })
], BookingOrderCreateNestedManyWithoutExperienceInput);
exports.BookingOrderCreateNestedManyWithoutExperienceInput = BookingOrderCreateNestedManyWithoutExperienceInput;
