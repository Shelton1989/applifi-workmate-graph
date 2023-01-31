"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderUpdateManyWithoutExperienceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderCreateManyExperienceInputEnvelope_1 = require("../inputs/BookingOrderCreateManyExperienceInputEnvelope");
const BookingOrderCreateOrConnectWithoutExperienceInput_1 = require("../inputs/BookingOrderCreateOrConnectWithoutExperienceInput");
const BookingOrderCreateWithoutExperienceInput_1 = require("../inputs/BookingOrderCreateWithoutExperienceInput");
const BookingOrderScalarWhereInput_1 = require("../inputs/BookingOrderScalarWhereInput");
const BookingOrderUpdateManyWithWhereWithoutExperienceInput_1 = require("../inputs/BookingOrderUpdateManyWithWhereWithoutExperienceInput");
const BookingOrderUpdateWithWhereUniqueWithoutExperienceInput_1 = require("../inputs/BookingOrderUpdateWithWhereUniqueWithoutExperienceInput");
const BookingOrderUpsertWithWhereUniqueWithoutExperienceInput_1 = require("../inputs/BookingOrderUpsertWithWhereUniqueWithoutExperienceInput");
const BookingOrderWhereUniqueInput_1 = require("../inputs/BookingOrderWhereUniqueInput");
let BookingOrderUpdateManyWithoutExperienceInput = class BookingOrderUpdateManyWithoutExperienceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderCreateWithoutExperienceInput_1.BookingOrderCreateWithoutExperienceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderUpdateManyWithoutExperienceInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderCreateOrConnectWithoutExperienceInput_1.BookingOrderCreateOrConnectWithoutExperienceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderUpdateManyWithoutExperienceInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderUpsertWithWhereUniqueWithoutExperienceInput_1.BookingOrderUpsertWithWhereUniqueWithoutExperienceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderUpdateManyWithoutExperienceInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderCreateManyExperienceInputEnvelope_1.BookingOrderCreateManyExperienceInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderCreateManyExperienceInputEnvelope_1.BookingOrderCreateManyExperienceInputEnvelope)
], BookingOrderUpdateManyWithoutExperienceInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderUpdateManyWithoutExperienceInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderUpdateManyWithoutExperienceInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderUpdateManyWithoutExperienceInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderUpdateManyWithoutExperienceInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderUpdateWithWhereUniqueWithoutExperienceInput_1.BookingOrderUpdateWithWhereUniqueWithoutExperienceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderUpdateManyWithoutExperienceInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderUpdateManyWithWhereWithoutExperienceInput_1.BookingOrderUpdateManyWithWhereWithoutExperienceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderUpdateManyWithoutExperienceInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderScalarWhereInput_1.BookingOrderScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderUpdateManyWithoutExperienceInput.prototype, "deleteMany", void 0);
BookingOrderUpdateManyWithoutExperienceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderUpdateManyWithoutExperienceInput", {
        isAbstract: true
    })
], BookingOrderUpdateManyWithoutExperienceInput);
exports.BookingOrderUpdateManyWithoutExperienceInput = BookingOrderUpdateManyWithoutExperienceInput;
