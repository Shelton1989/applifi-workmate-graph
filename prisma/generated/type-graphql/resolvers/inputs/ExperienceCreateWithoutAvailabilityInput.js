"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceCreateWithoutAvailabilityInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingCreateNestedOneWithoutExperienceInput_1 = require("../inputs/AggregateRatingCreateNestedOneWithoutExperienceInput");
const ExperienceCreategalleryInput_1 = require("../inputs/ExperienceCreategalleryInput");
const ExperienceCreatelikedByIdsInput_1 = require("../inputs/ExperienceCreatelikedByIdsInput");
const LocationCreateNestedManyWithoutExperienceInput_1 = require("../inputs/LocationCreateNestedManyWithoutExperienceInput");
const PostCreateNestedManyWithoutExperienceInput_1 = require("../inputs/PostCreateNestedManyWithoutExperienceInput");
const PriceCreateNestedManyWithoutExperienceInput_1 = require("../inputs/PriceCreateNestedManyWithoutExperienceInput");
const TenantCreateNestedOneWithoutExperiencesInput_1 = require("../inputs/TenantCreateNestedOneWithoutExperiencesInput");
const UserCreateNestedManyWithoutLikedExperiencesInput_1 = require("../inputs/UserCreateNestedManyWithoutLikedExperiencesInput");
const EXPERIENCE_CATEGORY_1 = require("../../enums/EXPERIENCE_CATEGORY");
const PUBLISH_STATUS_1 = require("../../enums/PUBLISH_STATUS");
let ExperienceCreateWithoutAvailabilityInput = class ExperienceCreateWithoutAvailabilityInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceCreateWithoutAvailabilityInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateNestedOneWithoutExperiencesInput_1.TenantCreateNestedOneWithoutExperiencesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantCreateNestedOneWithoutExperiencesInput_1.TenantCreateNestedOneWithoutExperiencesInput)
], ExperienceCreateWithoutAvailabilityInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceCreateWithoutAvailabilityInput.prototype, "productLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceCreateWithoutAvailabilityInput.prototype, "stripeProductId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceCreateWithoutAvailabilityInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceCreateWithoutAvailabilityInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EXPERIENCE_CATEGORY_1.EXPERIENCE_CATEGORY, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceCreateWithoutAvailabilityInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceCreateWithoutAvailabilityInput.prototype, "photo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreategalleryInput_1.ExperienceCreategalleryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreategalleryInput_1.ExperienceCreategalleryInput)
], ExperienceCreateWithoutAvailabilityInput.prototype, "gallery", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ExperienceCreateWithoutAvailabilityInput.prototype, "duration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingCreateNestedOneWithoutExperienceInput_1.AggregateRatingCreateNestedOneWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingCreateNestedOneWithoutExperienceInput_1.AggregateRatingCreateNestedOneWithoutExperienceInput)
], ExperienceCreateWithoutAvailabilityInput.prototype, "AggregateRating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PUBLISH_STATUS_1.PUBLISH_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceCreateWithoutAvailabilityInput.prototype, "publishStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedManyWithoutLikedExperiencesInput_1.UserCreateNestedManyWithoutLikedExperiencesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedManyWithoutLikedExperiencesInput_1.UserCreateNestedManyWithoutLikedExperiencesInput)
], ExperienceCreateWithoutAvailabilityInput.prototype, "LikedBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreatelikedByIdsInput_1.ExperienceCreatelikedByIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreatelikedByIdsInput_1.ExperienceCreatelikedByIdsInput)
], ExperienceCreateWithoutAvailabilityInput.prototype, "likedByIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationCreateNestedManyWithoutExperienceInput_1.LocationCreateNestedManyWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationCreateNestedManyWithoutExperienceInput_1.LocationCreateNestedManyWithoutExperienceInput)
], ExperienceCreateWithoutAvailabilityInput.prototype, "Locations", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateNestedManyWithoutExperienceInput_1.PriceCreateNestedManyWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceCreateNestedManyWithoutExperienceInput_1.PriceCreateNestedManyWithoutExperienceInput)
], ExperienceCreateWithoutAvailabilityInput.prototype, "Price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedManyWithoutExperienceInput_1.PostCreateNestedManyWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateNestedManyWithoutExperienceInput_1.PostCreateNestedManyWithoutExperienceInput)
], ExperienceCreateWithoutAvailabilityInput.prototype, "Posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ExperienceCreateWithoutAvailabilityInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ExperienceCreateWithoutAvailabilityInput.prototype, "updatedAt", void 0);
ExperienceCreateWithoutAvailabilityInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceCreateWithoutAvailabilityInput", {
        isAbstract: true
    })
], ExperienceCreateWithoutAvailabilityInput);
exports.ExperienceCreateWithoutAvailabilityInput = ExperienceCreateWithoutAvailabilityInput;
