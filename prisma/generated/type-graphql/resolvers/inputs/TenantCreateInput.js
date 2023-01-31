"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderCreateNestedManyWithoutTenantInput_1 = require("../inputs/BookingOrderCreateNestedManyWithoutTenantInput");
const ExperienceCreateNestedManyWithoutTenantInput_1 = require("../inputs/ExperienceCreateNestedManyWithoutTenantInput");
const LocationCreateNestedManyWithoutTenantInput_1 = require("../inputs/LocationCreateNestedManyWithoutTenantInput");
const TenantCreateexperienceImagesInput_1 = require("../inputs/TenantCreateexperienceImagesInput");
const UserCreateNestedManyWithoutTenantInput_1 = require("../inputs/UserCreateNestedManyWithoutTenantInput");
let TenantCreateInput = class TenantCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateInput.prototype, "slug", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateInput.prototype, "logoImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateInput.prototype, "avatar", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateexperienceImagesInput_1.TenantCreateexperienceImagesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCreateexperienceImagesInput_1.TenantCreateexperienceImagesInput)
], TenantCreateInput.prototype, "experienceImages", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedManyWithoutTenantInput_1.UserCreateNestedManyWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedManyWithoutTenantInput_1.UserCreateNestedManyWithoutTenantInput)
], TenantCreateInput.prototype, "Users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateNestedManyWithoutTenantInput_1.ExperienceCreateNestedManyWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreateNestedManyWithoutTenantInput_1.ExperienceCreateNestedManyWithoutTenantInput)
], TenantCreateInput.prototype, "Experiences", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderCreateNestedManyWithoutTenantInput_1.BookingOrderCreateNestedManyWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderCreateNestedManyWithoutTenantInput_1.BookingOrderCreateNestedManyWithoutTenantInput)
], TenantCreateInput.prototype, "BookingOrders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationCreateNestedManyWithoutTenantInput_1.LocationCreateNestedManyWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationCreateNestedManyWithoutTenantInput_1.LocationCreateNestedManyWithoutTenantInput)
], TenantCreateInput.prototype, "Locations", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TenantCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TenantCreateInput.prototype, "updatedAt", void 0);
TenantCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantCreateInput", {
        isAbstract: true
    })
], TenantCreateInput);
exports.TenantCreateInput = TenantCreateInput;
