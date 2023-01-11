"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByExperienceAvailabilityArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceAvailabilityOrderByWithAggregationInput_1 = require("../../../inputs/ExperienceAvailabilityOrderByWithAggregationInput");
const ExperienceAvailabilityScalarWhereWithAggregatesInput_1 = require("../../../inputs/ExperienceAvailabilityScalarWhereWithAggregatesInput");
const ExperienceAvailabilityWhereInput_1 = require("../../../inputs/ExperienceAvailabilityWhereInput");
const ExperienceAvailabilityScalarFieldEnum_1 = require("../../../../enums/ExperienceAvailabilityScalarFieldEnum");
let GroupByExperienceAvailabilityArgs = class GroupByExperienceAvailabilityArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilityWhereInput_1.ExperienceAvailabilityWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilityWhereInput_1.ExperienceAvailabilityWhereInput)
], GroupByExperienceAvailabilityArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceAvailabilityOrderByWithAggregationInput_1.ExperienceAvailabilityOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByExperienceAvailabilityArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceAvailabilityScalarFieldEnum_1.ExperienceAvailabilityScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByExperienceAvailabilityArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilityScalarWhereWithAggregatesInput_1.ExperienceAvailabilityScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilityScalarWhereWithAggregatesInput_1.ExperienceAvailabilityScalarWhereWithAggregatesInput)
], GroupByExperienceAvailabilityArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByExperienceAvailabilityArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByExperienceAvailabilityArgs.prototype, "skip", void 0);
GroupByExperienceAvailabilityArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByExperienceAvailabilityArgs);
exports.GroupByExperienceAvailabilityArgs = GroupByExperienceAvailabilityArgs;
