"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceAvailabilitySumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ExperienceAvailabilitySumAggregate = class ExperienceAvailabilitySumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ExperienceAvailabilitySumAggregate.prototype, "weekendSpacesAvailable", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ExperienceAvailabilitySumAggregate.prototype, "dailySpacesAvailable", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ExperienceAvailabilitySumAggregate.prototype, "hourlySpacesAvailable", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ExperienceAvailabilitySumAggregate.prototype, "halfHourlySpacesAvailable", void 0);
ExperienceAvailabilitySumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ExperienceAvailabilitySumAggregate", {
        isAbstract: true
    })
], ExperienceAvailabilitySumAggregate);
exports.ExperienceAvailabilitySumAggregate = ExperienceAvailabilitySumAggregate;
