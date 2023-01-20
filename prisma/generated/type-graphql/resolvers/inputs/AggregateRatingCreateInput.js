"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRatingCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceCreateNestedOneWithoutAggregateRatingInput_1 = require("../inputs/ExperienceCreateNestedOneWithoutAggregateRatingInput");
let AggregateRatingCreateInput = class AggregateRatingCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AggregateRatingCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateRatingCreateInput.prototype, "ratingValue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateRatingCreateInput.prototype, "countedPosts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateRatingCreateInput.prototype, "allPosts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateRatingCreateInput.prototype, "ratingCount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateNestedOneWithoutAggregateRatingInput_1.ExperienceCreateNestedOneWithoutAggregateRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreateNestedOneWithoutAggregateRatingInput_1.ExperienceCreateNestedOneWithoutAggregateRatingInput)
], AggregateRatingCreateInput.prototype, "Experience", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AggregateRatingCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AggregateRatingCreateInput.prototype, "updatedAt", void 0);
AggregateRatingCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AggregateRatingCreateInput", {
        isAbstract: true
    })
], AggregateRatingCreateInput);
exports.AggregateRatingCreateInput = AggregateRatingCreateInput;
