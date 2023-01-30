"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceAvailabilityOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceAvailabilityAvgOrderByAggregateInput_1 = require("../inputs/ExperienceAvailabilityAvgOrderByAggregateInput");
const ExperienceAvailabilityCountOrderByAggregateInput_1 = require("../inputs/ExperienceAvailabilityCountOrderByAggregateInput");
const ExperienceAvailabilityMaxOrderByAggregateInput_1 = require("../inputs/ExperienceAvailabilityMaxOrderByAggregateInput");
const ExperienceAvailabilityMinOrderByAggregateInput_1 = require("../inputs/ExperienceAvailabilityMinOrderByAggregateInput");
const ExperienceAvailabilitySumOrderByAggregateInput_1 = require("../inputs/ExperienceAvailabilitySumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ExperienceAvailabilityOrderByWithAggregationInput = class ExperienceAvailabilityOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceAvailabilityOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceAvailabilityOrderByWithAggregationInput.prototype, "experienceId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceAvailabilityOrderByWithAggregationInput.prototype, "startDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceAvailabilityOrderByWithAggregationInput.prototype, "endDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceAvailabilityOrderByWithAggregationInput.prototype, "availabilityType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceAvailabilityOrderByWithAggregationInput.prototype, "spacesAvailable", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceAvailabilityOrderByWithAggregationInput.prototype, "spacesBooked", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceAvailabilityOrderByWithAggregationInput.prototype, "datesAreFlexible", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceAvailabilityOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceAvailabilityOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilityCountOrderByAggregateInput_1.ExperienceAvailabilityCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilityCountOrderByAggregateInput_1.ExperienceAvailabilityCountOrderByAggregateInput)
], ExperienceAvailabilityOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilityAvgOrderByAggregateInput_1.ExperienceAvailabilityAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilityAvgOrderByAggregateInput_1.ExperienceAvailabilityAvgOrderByAggregateInput)
], ExperienceAvailabilityOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilityMaxOrderByAggregateInput_1.ExperienceAvailabilityMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilityMaxOrderByAggregateInput_1.ExperienceAvailabilityMaxOrderByAggregateInput)
], ExperienceAvailabilityOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilityMinOrderByAggregateInput_1.ExperienceAvailabilityMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilityMinOrderByAggregateInput_1.ExperienceAvailabilityMinOrderByAggregateInput)
], ExperienceAvailabilityOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilitySumOrderByAggregateInput_1.ExperienceAvailabilitySumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilitySumOrderByAggregateInput_1.ExperienceAvailabilitySumOrderByAggregateInput)
], ExperienceAvailabilityOrderByWithAggregationInput.prototype, "_sum", void 0);
ExperienceAvailabilityOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceAvailabilityOrderByWithAggregationInput", {
        isAbstract: true
    })
], ExperienceAvailabilityOrderByWithAggregationInput);
exports.ExperienceAvailabilityOrderByWithAggregationInput = ExperienceAvailabilityOrderByWithAggregationInput;
