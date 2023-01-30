"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceAvailabilityMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AVAILABILITY_TYPE_1 = require("../../enums/AVAILABILITY_TYPE");
let ExperienceAvailabilityMinAggregate = class ExperienceAvailabilityMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceAvailabilityMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceAvailabilityMinAggregate.prototype, "experienceId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ExperienceAvailabilityMinAggregate.prototype, "startDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ExperienceAvailabilityMinAggregate.prototype, "endDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AVAILABILITY_TYPE_1.AVAILABILITY_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceAvailabilityMinAggregate.prototype, "availabilityType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ExperienceAvailabilityMinAggregate.prototype, "spacesAvailable", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ExperienceAvailabilityMinAggregate.prototype, "spacesBooked", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ExperienceAvailabilityMinAggregate.prototype, "datesAreFlexible", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ExperienceAvailabilityMinAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ExperienceAvailabilityMinAggregate.prototype, "updatedAt", void 0);
ExperienceAvailabilityMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ExperienceAvailabilityMinAggregate", {
        isAbstract: true
    })
], ExperienceAvailabilityMinAggregate);
exports.ExperienceAvailabilityMinAggregate = ExperienceAvailabilityMinAggregate;
