"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceAvailabilityCreateWithoutExperienceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AVAILABILITY_TYPE_1 = require("../../enums/AVAILABILITY_TYPE");
let ExperienceAvailabilityCreateWithoutExperienceInput = class ExperienceAvailabilityCreateWithoutExperienceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceAvailabilityCreateWithoutExperienceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ExperienceAvailabilityCreateWithoutExperienceInput.prototype, "startDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ExperienceAvailabilityCreateWithoutExperienceInput.prototype, "endDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AVAILABILITY_TYPE_1.AVAILABILITY_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceAvailabilityCreateWithoutExperienceInput.prototype, "availabilityType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ExperienceAvailabilityCreateWithoutExperienceInput.prototype, "weekendSpacesAvailable", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ExperienceAvailabilityCreateWithoutExperienceInput.prototype, "dailySpacesAvailable", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ExperienceAvailabilityCreateWithoutExperienceInput.prototype, "hourlySpacesAvailable", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ExperienceAvailabilityCreateWithoutExperienceInput.prototype, "halfHourlySpacesAvailable", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ExperienceAvailabilityCreateWithoutExperienceInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ExperienceAvailabilityCreateWithoutExperienceInput.prototype, "updatedAt", void 0);
ExperienceAvailabilityCreateWithoutExperienceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceAvailabilityCreateWithoutExperienceInput", {
        isAbstract: true
    })
], ExperienceAvailabilityCreateWithoutExperienceInput);
exports.ExperienceAvailabilityCreateWithoutExperienceInput = ExperienceAvailabilityCreateWithoutExperienceInput;
