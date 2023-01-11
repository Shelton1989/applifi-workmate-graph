"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceAvailabilitySumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ExperienceAvailabilitySumOrderByAggregateInput = class ExperienceAvailabilitySumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceAvailabilitySumOrderByAggregateInput.prototype, "weekendSpacesAvailable", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceAvailabilitySumOrderByAggregateInput.prototype, "dailySpacesAvailable", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceAvailabilitySumOrderByAggregateInput.prototype, "hourlySpacesAvailable", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceAvailabilitySumOrderByAggregateInput.prototype, "halfHourlySpacesAvailable", void 0);
ExperienceAvailabilitySumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceAvailabilitySumOrderByAggregateInput", {
        isAbstract: true
    })
], ExperienceAvailabilitySumOrderByAggregateInput);
exports.ExperienceAvailabilitySumOrderByAggregateInput = ExperienceAvailabilitySumOrderByAggregateInput;
