"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceAvailabilityAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ExperienceAvailabilityAvgAggregate = class ExperienceAvailabilityAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ExperienceAvailabilityAvgAggregate.prototype, "spacesAvailable", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ExperienceAvailabilityAvgAggregate.prototype, "spacesBooked", void 0);
ExperienceAvailabilityAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ExperienceAvailabilityAvgAggregate", {
        isAbstract: true
    })
], ExperienceAvailabilityAvgAggregate);
exports.ExperienceAvailabilityAvgAggregate = ExperienceAvailabilityAvgAggregate;
