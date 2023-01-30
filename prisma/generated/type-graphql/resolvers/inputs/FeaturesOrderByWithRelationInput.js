"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeaturesOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceOrderByWithRelationInput_1 = require("../inputs/ExperienceOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let FeaturesOrderByWithRelationInput = class FeaturesOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FeaturesOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceOrderByWithRelationInput_1.ExperienceOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceOrderByWithRelationInput_1.ExperienceOrderByWithRelationInput)
], FeaturesOrderByWithRelationInput.prototype, "Experience", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FeaturesOrderByWithRelationInput.prototype, "experienceId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FeaturesOrderByWithRelationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FeaturesOrderByWithRelationInput.prototype, "shortDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FeaturesOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FeaturesOrderByWithRelationInput.prototype, "updatedAt", void 0);
FeaturesOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FeaturesOrderByWithRelationInput", {
        isAbstract: true
    })
], FeaturesOrderByWithRelationInput);
exports.FeaturesOrderByWithRelationInput = FeaturesOrderByWithRelationInput;
