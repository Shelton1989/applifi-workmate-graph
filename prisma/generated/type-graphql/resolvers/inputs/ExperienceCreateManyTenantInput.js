"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceCreateManyTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceCreategalleryInput_1 = require("../inputs/ExperienceCreategalleryInput");
const ExperienceCreatelikedByIdsInput_1 = require("../inputs/ExperienceCreatelikedByIdsInput");
const EXPERIENCE_CATEGORY_1 = require("../../enums/EXPERIENCE_CATEGORY");
const PUBLISH_STATUS_1 = require("../../enums/PUBLISH_STATUS");
let ExperienceCreateManyTenantInput = class ExperienceCreateManyTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceCreateManyTenantInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceCreateManyTenantInput.prototype, "productLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceCreateManyTenantInput.prototype, "stripeProductId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceCreateManyTenantInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceCreateManyTenantInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EXPERIENCE_CATEGORY_1.EXPERIENCE_CATEGORY, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceCreateManyTenantInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceCreateManyTenantInput.prototype, "photo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreategalleryInput_1.ExperienceCreategalleryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreategalleryInput_1.ExperienceCreategalleryInput)
], ExperienceCreateManyTenantInput.prototype, "gallery", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceCreateManyTenantInput.prototype, "location", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ExperienceCreateManyTenantInput.prototype, "duration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PUBLISH_STATUS_1.PUBLISH_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceCreateManyTenantInput.prototype, "publishStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreatelikedByIdsInput_1.ExperienceCreatelikedByIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreatelikedByIdsInput_1.ExperienceCreatelikedByIdsInput)
], ExperienceCreateManyTenantInput.prototype, "likedByIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ExperienceCreateManyTenantInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ExperienceCreateManyTenantInput.prototype, "updatedAt", void 0);
ExperienceCreateManyTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceCreateManyTenantInput", {
        isAbstract: true
    })
], ExperienceCreateManyTenantInput);
exports.ExperienceCreateManyTenantInput = ExperienceCreateManyTenantInput;
