"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantCreateWithoutLocationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderCreateNestedManyWithoutTenantInput_1 = require("../inputs/BookingOrderCreateNestedManyWithoutTenantInput");
const ExperienceCreateNestedManyWithoutTenantInput_1 = require("../inputs/ExperienceCreateNestedManyWithoutTenantInput");
const TenantCreateexperienceImagesInput_1 = require("../inputs/TenantCreateexperienceImagesInput");
const UserCreateNestedManyWithoutTenantInput_1 = require("../inputs/UserCreateNestedManyWithoutTenantInput");
let TenantCreateWithoutLocationsInput = class TenantCreateWithoutLocationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateWithoutLocationsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateWithoutLocationsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateWithoutLocationsInput.prototype, "slug", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateWithoutLocationsInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateWithoutLocationsInput.prototype, "logoImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateWithoutLocationsInput.prototype, "avatar", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateWithoutLocationsInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateexperienceImagesInput_1.TenantCreateexperienceImagesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCreateexperienceImagesInput_1.TenantCreateexperienceImagesInput)
], TenantCreateWithoutLocationsInput.prototype, "experienceImages", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedManyWithoutTenantInput_1.UserCreateNestedManyWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedManyWithoutTenantInput_1.UserCreateNestedManyWithoutTenantInput)
], TenantCreateWithoutLocationsInput.prototype, "Users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateNestedManyWithoutTenantInput_1.ExperienceCreateNestedManyWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreateNestedManyWithoutTenantInput_1.ExperienceCreateNestedManyWithoutTenantInput)
], TenantCreateWithoutLocationsInput.prototype, "Experiences", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderCreateNestedManyWithoutTenantInput_1.BookingOrderCreateNestedManyWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderCreateNestedManyWithoutTenantInput_1.BookingOrderCreateNestedManyWithoutTenantInput)
], TenantCreateWithoutLocationsInput.prototype, "BookingOrders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TenantCreateWithoutLocationsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TenantCreateWithoutLocationsInput.prototype, "updatedAt", void 0);
TenantCreateWithoutLocationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantCreateWithoutLocationsInput", {
        isAbstract: true
    })
], TenantCreateWithoutLocationsInput);
exports.TenantCreateWithoutLocationsInput = TenantCreateWithoutLocationsInput;
