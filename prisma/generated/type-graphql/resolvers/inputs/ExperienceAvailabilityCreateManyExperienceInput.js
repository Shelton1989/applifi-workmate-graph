"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceAvailabilityCreateManyExperienceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AVAILABILITY_TYPE_1 = require("../../enums/AVAILABILITY_TYPE");
let ExperienceAvailabilityCreateManyExperienceInput = class ExperienceAvailabilityCreateManyExperienceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceAvailabilityCreateManyExperienceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ExperienceAvailabilityCreateManyExperienceInput.prototype, "startDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ExperienceAvailabilityCreateManyExperienceInput.prototype, "endDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AVAILABILITY_TYPE_1.AVAILABILITY_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceAvailabilityCreateManyExperienceInput.prototype, "availabilityType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ExperienceAvailabilityCreateManyExperienceInput.prototype, "spacesAvailable", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ExperienceAvailabilityCreateManyExperienceInput.prototype, "spacesBooked", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ExperienceAvailabilityCreateManyExperienceInput.prototype, "datesAreFlexible", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ExperienceAvailabilityCreateManyExperienceInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ExperienceAvailabilityCreateManyExperienceInput.prototype, "updatedAt", void 0);
ExperienceAvailabilityCreateManyExperienceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceAvailabilityCreateManyExperienceInput", {
        isAbstract: true
    })
], ExperienceAvailabilityCreateManyExperienceInput);
exports.ExperienceAvailabilityCreateManyExperienceInput = ExperienceAvailabilityCreateManyExperienceInput;
