"use strict";
var ExperienceAvailabilityScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceAvailabilityScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFilter_1 = require("../inputs/BoolFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const EnumAVAILABILITY_TYPEFilter_1 = require("../inputs/EnumAVAILABILITY_TYPEFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let ExperienceAvailabilityScalarWhereInput = ExperienceAvailabilityScalarWhereInput_1 = class ExperienceAvailabilityScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceAvailabilityScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceAvailabilityScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceAvailabilityScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceAvailabilityScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceAvailabilityScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceAvailabilityScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ExperienceAvailabilityScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ExperienceAvailabilityScalarWhereInput.prototype, "experienceId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], ExperienceAvailabilityScalarWhereInput.prototype, "startDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], ExperienceAvailabilityScalarWhereInput.prototype, "endDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumAVAILABILITY_TYPEFilter_1.EnumAVAILABILITY_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumAVAILABILITY_TYPEFilter_1.EnumAVAILABILITY_TYPEFilter)
], ExperienceAvailabilityScalarWhereInput.prototype, "availabilityType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], ExperienceAvailabilityScalarWhereInput.prototype, "spacesAvailable", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], ExperienceAvailabilityScalarWhereInput.prototype, "spacesBooked", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], ExperienceAvailabilityScalarWhereInput.prototype, "datesAreFlexible", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ExperienceAvailabilityScalarWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ExperienceAvailabilityScalarWhereInput.prototype, "updatedAt", void 0);
ExperienceAvailabilityScalarWhereInput = ExperienceAvailabilityScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceAvailabilityScalarWhereInput", {
        isAbstract: true
    })
], ExperienceAvailabilityScalarWhereInput);
exports.ExperienceAvailabilityScalarWhereInput = ExperienceAvailabilityScalarWhereInput;
