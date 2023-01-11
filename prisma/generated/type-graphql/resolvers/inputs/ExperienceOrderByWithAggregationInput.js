"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceAvgOrderByAggregateInput_1 = require("../inputs/ExperienceAvgOrderByAggregateInput");
const ExperienceCountOrderByAggregateInput_1 = require("../inputs/ExperienceCountOrderByAggregateInput");
const ExperienceMaxOrderByAggregateInput_1 = require("../inputs/ExperienceMaxOrderByAggregateInput");
const ExperienceMinOrderByAggregateInput_1 = require("../inputs/ExperienceMinOrderByAggregateInput");
const ExperienceSumOrderByAggregateInput_1 = require("../inputs/ExperienceSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ExperienceOrderByWithAggregationInput = class ExperienceOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceOrderByWithAggregationInput.prototype, "tenantId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceOrderByWithAggregationInput.prototype, "productLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceOrderByWithAggregationInput.prototype, "stripeProductId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceOrderByWithAggregationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceOrderByWithAggregationInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceOrderByWithAggregationInput.prototype, "photo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceOrderByWithAggregationInput.prototype, "gallery", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceOrderByWithAggregationInput.prototype, "location", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceOrderByWithAggregationInput.prototype, "duration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceOrderByWithAggregationInput.prototype, "publishStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceOrderByWithAggregationInput.prototype, "likedByIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCountOrderByAggregateInput_1.ExperienceCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCountOrderByAggregateInput_1.ExperienceCountOrderByAggregateInput)
], ExperienceOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvgOrderByAggregateInput_1.ExperienceAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceAvgOrderByAggregateInput_1.ExperienceAvgOrderByAggregateInput)
], ExperienceOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceMaxOrderByAggregateInput_1.ExperienceMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceMaxOrderByAggregateInput_1.ExperienceMaxOrderByAggregateInput)
], ExperienceOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceMinOrderByAggregateInput_1.ExperienceMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceMinOrderByAggregateInput_1.ExperienceMinOrderByAggregateInput)
], ExperienceOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceSumOrderByAggregateInput_1.ExperienceSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceSumOrderByAggregateInput_1.ExperienceSumOrderByAggregateInput)
], ExperienceOrderByWithAggregationInput.prototype, "_sum", void 0);
ExperienceOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceOrderByWithAggregationInput", {
        isAbstract: true
    })
], ExperienceOrderByWithAggregationInput);
exports.ExperienceOrderByWithAggregationInput = ExperienceOrderByWithAggregationInput;
