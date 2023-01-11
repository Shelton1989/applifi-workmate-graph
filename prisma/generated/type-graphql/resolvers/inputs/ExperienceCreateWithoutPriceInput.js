"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceCreateWithoutPriceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingCreateNestedOneWithoutExperienceInput_1 = require("../inputs/AggregateRatingCreateNestedOneWithoutExperienceInput");
const ExperienceAvailabilityCreateNestedManyWithoutExperienceInput_1 = require("../inputs/ExperienceAvailabilityCreateNestedManyWithoutExperienceInput");
const ExperienceCreategalleryInput_1 = require("../inputs/ExperienceCreategalleryInput");
const ExperienceCreatelikedByIdsInput_1 = require("../inputs/ExperienceCreatelikedByIdsInput");
const LocationCreateNestedManyWithoutExperienceInput_1 = require("../inputs/LocationCreateNestedManyWithoutExperienceInput");
const PostCreateNestedManyWithoutExperienceInput_1 = require("../inputs/PostCreateNestedManyWithoutExperienceInput");
const TenantCreateNestedOneWithoutExperiencesInput_1 = require("../inputs/TenantCreateNestedOneWithoutExperiencesInput");
const UserCreateNestedManyWithoutLikedExperiencesInput_1 = require("../inputs/UserCreateNestedManyWithoutLikedExperiencesInput");
const EXPERIENCE_CATEGORY_1 = require("../../enums/EXPERIENCE_CATEGORY");
const PUBLISH_STATUS_1 = require("../../enums/PUBLISH_STATUS");
let ExperienceCreateWithoutPriceInput = class ExperienceCreateWithoutPriceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceCreateWithoutPriceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateNestedOneWithoutExperiencesInput_1.TenantCreateNestedOneWithoutExperiencesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantCreateNestedOneWithoutExperiencesInput_1.TenantCreateNestedOneWithoutExperiencesInput)
], ExperienceCreateWithoutPriceInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceCreateWithoutPriceInput.prototype, "productLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceCreateWithoutPriceInput.prototype, "stripeProductId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceCreateWithoutPriceInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceCreateWithoutPriceInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EXPERIENCE_CATEGORY_1.EXPERIENCE_CATEGORY, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceCreateWithoutPriceInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilityCreateNestedManyWithoutExperienceInput_1.ExperienceAvailabilityCreateNestedManyWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilityCreateNestedManyWithoutExperienceInput_1.ExperienceAvailabilityCreateNestedManyWithoutExperienceInput)
], ExperienceCreateWithoutPriceInput.prototype, "Availability", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceCreateWithoutPriceInput.prototype, "photo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreategalleryInput_1.ExperienceCreategalleryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreategalleryInput_1.ExperienceCreategalleryInput)
], ExperienceCreateWithoutPriceInput.prototype, "gallery", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceCreateWithoutPriceInput.prototype, "location", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ExperienceCreateWithoutPriceInput.prototype, "duration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingCreateNestedOneWithoutExperienceInput_1.AggregateRatingCreateNestedOneWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingCreateNestedOneWithoutExperienceInput_1.AggregateRatingCreateNestedOneWithoutExperienceInput)
], ExperienceCreateWithoutPriceInput.prototype, "AggregatedRating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PUBLISH_STATUS_1.PUBLISH_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceCreateWithoutPriceInput.prototype, "publishStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedManyWithoutLikedExperiencesInput_1.UserCreateNestedManyWithoutLikedExperiencesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedManyWithoutLikedExperiencesInput_1.UserCreateNestedManyWithoutLikedExperiencesInput)
], ExperienceCreateWithoutPriceInput.prototype, "LikedBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreatelikedByIdsInput_1.ExperienceCreatelikedByIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreatelikedByIdsInput_1.ExperienceCreatelikedByIdsInput)
], ExperienceCreateWithoutPriceInput.prototype, "likedByIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationCreateNestedManyWithoutExperienceInput_1.LocationCreateNestedManyWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationCreateNestedManyWithoutExperienceInput_1.LocationCreateNestedManyWithoutExperienceInput)
], ExperienceCreateWithoutPriceInput.prototype, "Locations", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedManyWithoutExperienceInput_1.PostCreateNestedManyWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateNestedManyWithoutExperienceInput_1.PostCreateNestedManyWithoutExperienceInput)
], ExperienceCreateWithoutPriceInput.prototype, "Posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ExperienceCreateWithoutPriceInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ExperienceCreateWithoutPriceInput.prototype, "updatedAt", void 0);
ExperienceCreateWithoutPriceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceCreateWithoutPriceInput", {
        isAbstract: true
    })
], ExperienceCreateWithoutPriceInput);
exports.ExperienceCreateWithoutPriceInput = ExperienceCreateWithoutPriceInput;
