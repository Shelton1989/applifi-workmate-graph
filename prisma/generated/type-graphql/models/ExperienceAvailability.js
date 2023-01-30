"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceAvailability = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AVAILABILITY_TYPE_1 = require("../enums/AVAILABILITY_TYPE");
let ExperienceAvailability = class ExperienceAvailability {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceAvailability.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceAvailability.prototype, "experienceId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ExperienceAvailability.prototype, "startDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ExperienceAvailability.prototype, "endDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AVAILABILITY_TYPE_1.AVAILABILITY_TYPE, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceAvailability.prototype, "availabilityType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ExperienceAvailability.prototype, "spacesAvailable", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ExperienceAvailability.prototype, "spacesBooked", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], ExperienceAvailability.prototype, "datesAreFlexible", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ExperienceAvailability.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ExperienceAvailability.prototype, "updatedAt", void 0);
ExperienceAvailability = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ExperienceAvailability", {
        isAbstract: true
    })
], ExperienceAvailability);
exports.ExperienceAvailability = ExperienceAvailability;
