"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ExperienceOrderByRelationAggregateInput = class ExperienceOrderByRelationAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceOrderByRelationAggregateInput.prototype, "_count", void 0);
ExperienceOrderByRelationAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceOrderByRelationAggregateInput", {
        isAbstract: true
    })
], ExperienceOrderByRelationAggregateInput);
exports.ExperienceOrderByRelationAggregateInput = ExperienceOrderByRelationAggregateInput;
