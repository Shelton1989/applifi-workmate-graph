"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateExperienceAvailability = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceAvailabilityAvgAggregate_1 = require("../outputs/ExperienceAvailabilityAvgAggregate");
const ExperienceAvailabilityCountAggregate_1 = require("../outputs/ExperienceAvailabilityCountAggregate");
const ExperienceAvailabilityMaxAggregate_1 = require("../outputs/ExperienceAvailabilityMaxAggregate");
const ExperienceAvailabilityMinAggregate_1 = require("../outputs/ExperienceAvailabilityMinAggregate");
const ExperienceAvailabilitySumAggregate_1 = require("../outputs/ExperienceAvailabilitySumAggregate");
let AggregateExperienceAvailability = class AggregateExperienceAvailability {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilityCountAggregate_1.ExperienceAvailabilityCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilityCountAggregate_1.ExperienceAvailabilityCountAggregate)
], AggregateExperienceAvailability.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilityAvgAggregate_1.ExperienceAvailabilityAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilityAvgAggregate_1.ExperienceAvailabilityAvgAggregate)
], AggregateExperienceAvailability.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilitySumAggregate_1.ExperienceAvailabilitySumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilitySumAggregate_1.ExperienceAvailabilitySumAggregate)
], AggregateExperienceAvailability.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilityMinAggregate_1.ExperienceAvailabilityMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilityMinAggregate_1.ExperienceAvailabilityMinAggregate)
], AggregateExperienceAvailability.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilityMaxAggregate_1.ExperienceAvailabilityMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilityMaxAggregate_1.ExperienceAvailabilityMaxAggregate)
], AggregateExperienceAvailability.prototype, "_max", void 0);
AggregateExperienceAvailability = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateExperienceAvailability", {
        isAbstract: true
    })
], AggregateExperienceAvailability);
exports.AggregateExperienceAvailability = AggregateExperienceAvailability;
