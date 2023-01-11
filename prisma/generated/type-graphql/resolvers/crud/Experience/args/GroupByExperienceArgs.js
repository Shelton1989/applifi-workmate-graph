"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByExperienceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceOrderByWithAggregationInput_1 = require("../../../inputs/ExperienceOrderByWithAggregationInput");
const ExperienceScalarWhereWithAggregatesInput_1 = require("../../../inputs/ExperienceScalarWhereWithAggregatesInput");
const ExperienceWhereInput_1 = require("../../../inputs/ExperienceWhereInput");
const ExperienceScalarFieldEnum_1 = require("../../../../enums/ExperienceScalarFieldEnum");
let GroupByExperienceArgs = class GroupByExperienceArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceWhereInput_1.ExperienceWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceWhereInput_1.ExperienceWhereInput)
], GroupByExperienceArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceOrderByWithAggregationInput_1.ExperienceOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByExperienceArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceScalarFieldEnum_1.ExperienceScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByExperienceArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceScalarWhereWithAggregatesInput_1.ExperienceScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceScalarWhereWithAggregatesInput_1.ExperienceScalarWhereWithAggregatesInput)
], GroupByExperienceArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByExperienceArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByExperienceArgs.prototype, "skip", void 0);
GroupByExperienceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByExperienceArgs);
exports.GroupByExperienceArgs = GroupByExperienceArgs;
