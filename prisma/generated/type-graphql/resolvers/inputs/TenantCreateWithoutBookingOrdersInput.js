"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantCreateWithoutBookingOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceCreateNestedManyWithoutTenantInput_1 = require("../inputs/ExperienceCreateNestedManyWithoutTenantInput");
const LocationCreateNestedManyWithoutTenantInput_1 = require("../inputs/LocationCreateNestedManyWithoutTenantInput");
const TenantCreateexperienceImagesInput_1 = require("../inputs/TenantCreateexperienceImagesInput");
const UserCreateNestedManyWithoutTenantInput_1 = require("../inputs/UserCreateNestedManyWithoutTenantInput");
let TenantCreateWithoutBookingOrdersInput = class TenantCreateWithoutBookingOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateWithoutBookingOrdersInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateWithoutBookingOrdersInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateWithoutBookingOrdersInput.prototype, "slug", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateWithoutBookingOrdersInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateWithoutBookingOrdersInput.prototype, "logoImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateWithoutBookingOrdersInput.prototype, "avatar", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateWithoutBookingOrdersInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateexperienceImagesInput_1.TenantCreateexperienceImagesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCreateexperienceImagesInput_1.TenantCreateexperienceImagesInput)
], TenantCreateWithoutBookingOrdersInput.prototype, "experienceImages", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedManyWithoutTenantInput_1.UserCreateNestedManyWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedManyWithoutTenantInput_1.UserCreateNestedManyWithoutTenantInput)
], TenantCreateWithoutBookingOrdersInput.prototype, "Users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateNestedManyWithoutTenantInput_1.ExperienceCreateNestedManyWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreateNestedManyWithoutTenantInput_1.ExperienceCreateNestedManyWithoutTenantInput)
], TenantCreateWithoutBookingOrdersInput.prototype, "Experiences", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationCreateNestedManyWithoutTenantInput_1.LocationCreateNestedManyWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationCreateNestedManyWithoutTenantInput_1.LocationCreateNestedManyWithoutTenantInput)
], TenantCreateWithoutBookingOrdersInput.prototype, "Locations", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TenantCreateWithoutBookingOrdersInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TenantCreateWithoutBookingOrdersInput.prototype, "updatedAt", void 0);
TenantCreateWithoutBookingOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantCreateWithoutBookingOrdersInput", {
        isAbstract: true
    })
], TenantCreateWithoutBookingOrdersInput);
exports.TenantCreateWithoutBookingOrdersInput = TenantCreateWithoutBookingOrdersInput;
