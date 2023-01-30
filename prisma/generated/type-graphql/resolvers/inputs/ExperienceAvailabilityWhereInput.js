"use strict";
var ExperienceAvailabilityWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceAvailabilityWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFilter_1 = require("../inputs/BoolFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const EnumAVAILABILITY_TYPEFilter_1 = require("../inputs/EnumAVAILABILITY_TYPEFilter");
const ExperienceRelationFilter_1 = require("../inputs/ExperienceRelationFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let ExperienceAvailabilityWhereInput = ExperienceAvailabilityWhereInput_1 = class ExperienceAvailabilityWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceAvailabilityWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceAvailabilityWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceAvailabilityWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceAvailabilityWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceAvailabilityWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceAvailabilityWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ExperienceAvailabilityWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceRelationFilter_1.ExperienceRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceRelationFilter_1.ExperienceRelationFilter)
], ExperienceAvailabilityWhereInput.prototype, "Experience", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ExperienceAvailabilityWhereInput.prototype, "experienceId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], ExperienceAvailabilityWhereInput.prototype, "startDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], ExperienceAvailabilityWhereInput.prototype, "endDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumAVAILABILITY_TYPEFilter_1.EnumAVAILABILITY_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumAVAILABILITY_TYPEFilter_1.EnumAVAILABILITY_TYPEFilter)
], ExperienceAvailabilityWhereInput.prototype, "availabilityType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], ExperienceAvailabilityWhereInput.prototype, "spacesAvailable", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], ExperienceAvailabilityWhereInput.prototype, "spacesBooked", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], ExperienceAvailabilityWhereInput.prototype, "datesAreFlexible", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ExperienceAvailabilityWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ExperienceAvailabilityWhereInput.prototype, "updatedAt", void 0);
ExperienceAvailabilityWhereInput = ExperienceAvailabilityWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceAvailabilityWhereInput", {
        isAbstract: true
    })
], ExperienceAvailabilityWhereInput);
exports.ExperienceAvailabilityWhereInput = ExperienceAvailabilityWhereInput;
