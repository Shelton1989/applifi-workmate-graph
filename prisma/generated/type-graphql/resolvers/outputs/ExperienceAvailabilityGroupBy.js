"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceAvailabilityGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceAvailabilityAvgAggregate_1 = require("../outputs/ExperienceAvailabilityAvgAggregate");
const ExperienceAvailabilityCountAggregate_1 = require("../outputs/ExperienceAvailabilityCountAggregate");
const ExperienceAvailabilityMaxAggregate_1 = require("../outputs/ExperienceAvailabilityMaxAggregate");
const ExperienceAvailabilityMinAggregate_1 = require("../outputs/ExperienceAvailabilityMinAggregate");
const ExperienceAvailabilitySumAggregate_1 = require("../outputs/ExperienceAvailabilitySumAggregate");
const AVAILABILITY_TYPE_1 = require("../../enums/AVAILABILITY_TYPE");
let ExperienceAvailabilityGroupBy = class ExperienceAvailabilityGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceAvailabilityGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceAvailabilityGroupBy.prototype, "experienceId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ExperienceAvailabilityGroupBy.prototype, "startDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ExperienceAvailabilityGroupBy.prototype, "endDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AVAILABILITY_TYPE_1.AVAILABILITY_TYPE, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceAvailabilityGroupBy.prototype, "availabilityType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ExperienceAvailabilityGroupBy.prototype, "spacesAvailable", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ExperienceAvailabilityGroupBy.prototype, "spacesBooked", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], ExperienceAvailabilityGroupBy.prototype, "datesAreFlexible", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ExperienceAvailabilityGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ExperienceAvailabilityGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilityCountAggregate_1.ExperienceAvailabilityCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilityCountAggregate_1.ExperienceAvailabilityCountAggregate)
], ExperienceAvailabilityGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilityAvgAggregate_1.ExperienceAvailabilityAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilityAvgAggregate_1.ExperienceAvailabilityAvgAggregate)
], ExperienceAvailabilityGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilitySumAggregate_1.ExperienceAvailabilitySumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilitySumAggregate_1.ExperienceAvailabilitySumAggregate)
], ExperienceAvailabilityGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilityMinAggregate_1.ExperienceAvailabilityMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilityMinAggregate_1.ExperienceAvailabilityMinAggregate)
], ExperienceAvailabilityGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilityMaxAggregate_1.ExperienceAvailabilityMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilityMaxAggregate_1.ExperienceAvailabilityMaxAggregate)
], ExperienceAvailabilityGroupBy.prototype, "_max", void 0);
ExperienceAvailabilityGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ExperienceAvailabilityGroupBy", {
        isAbstract: true
    })
], ExperienceAvailabilityGroupBy);
exports.ExperienceAvailabilityGroupBy = ExperienceAvailabilityGroupBy;
