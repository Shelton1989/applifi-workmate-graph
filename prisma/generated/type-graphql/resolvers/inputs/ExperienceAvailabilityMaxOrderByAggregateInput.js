"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceAvailabilityMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ExperienceAvailabilityMaxOrderByAggregateInput = class ExperienceAvailabilityMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceAvailabilityMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceAvailabilityMaxOrderByAggregateInput.prototype, "experienceId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceAvailabilityMaxOrderByAggregateInput.prototype, "startDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceAvailabilityMaxOrderByAggregateInput.prototype, "endDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceAvailabilityMaxOrderByAggregateInput.prototype, "availabilityType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceAvailabilityMaxOrderByAggregateInput.prototype, "spacesAvailable", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceAvailabilityMaxOrderByAggregateInput.prototype, "spacesBooked", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceAvailabilityMaxOrderByAggregateInput.prototype, "datesAreFlexible", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceAvailabilityMaxOrderByAggregateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceAvailabilityMaxOrderByAggregateInput.prototype, "updatedAt", void 0);
ExperienceAvailabilityMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceAvailabilityMaxOrderByAggregateInput", {
        isAbstract: true
    })
], ExperienceAvailabilityMaxOrderByAggregateInput);
exports.ExperienceAvailabilityMaxOrderByAggregateInput = ExperienceAvailabilityMaxOrderByAggregateInput;
