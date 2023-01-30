"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceAvailabilityAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ExperienceAvailabilityAvgOrderByAggregateInput = class ExperienceAvailabilityAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceAvailabilityAvgOrderByAggregateInput.prototype, "spacesAvailable", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceAvailabilityAvgOrderByAggregateInput.prototype, "spacesBooked", void 0);
ExperienceAvailabilityAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceAvailabilityAvgOrderByAggregateInput", {
        isAbstract: true
    })
], ExperienceAvailabilityAvgOrderByAggregateInput);
exports.ExperienceAvailabilityAvgOrderByAggregateInput = ExperienceAvailabilityAvgOrderByAggregateInput;
