"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantCreateWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LocationCreateNestedManyWithoutTenantInput_1 = require("../inputs/LocationCreateNestedManyWithoutTenantInput");
const MealCreateNestedManyWithoutTenantInput_1 = require("../inputs/MealCreateNestedManyWithoutTenantInput");
const TenantCreateacceptedUserEmailDomainsInput_1 = require("../inputs/TenantCreateacceptedUserEmailDomainsInput");
const TenantCreateexperienceImagesInput_1 = require("../inputs/TenantCreateexperienceImagesInput");
const UserCreateNestedManyWithoutTenantInput_1 = require("../inputs/UserCreateNestedManyWithoutTenantInput");
let TenantCreateWithoutOrdersInput = class TenantCreateWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateWithoutOrdersInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateWithoutOrdersInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateWithoutOrdersInput.prototype, "slug", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateWithoutOrdersInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateWithoutOrdersInput.prototype, "logoImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateWithoutOrdersInput.prototype, "avatar", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateWithoutOrdersInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateexperienceImagesInput_1.TenantCreateexperienceImagesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCreateexperienceImagesInput_1.TenantCreateexperienceImagesInput)
], TenantCreateWithoutOrdersInput.prototype, "experienceImages", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedManyWithoutTenantInput_1.UserCreateNestedManyWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedManyWithoutTenantInput_1.UserCreateNestedManyWithoutTenantInput)
], TenantCreateWithoutOrdersInput.prototype, "Users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateNestedManyWithoutTenantInput_1.MealCreateNestedManyWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreateNestedManyWithoutTenantInput_1.MealCreateNestedManyWithoutTenantInput)
], TenantCreateWithoutOrdersInput.prototype, "Meals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationCreateNestedManyWithoutTenantInput_1.LocationCreateNestedManyWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationCreateNestedManyWithoutTenantInput_1.LocationCreateNestedManyWithoutTenantInput)
], TenantCreateWithoutOrdersInput.prototype, "Locations", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateacceptedUserEmailDomainsInput_1.TenantCreateacceptedUserEmailDomainsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCreateacceptedUserEmailDomainsInput_1.TenantCreateacceptedUserEmailDomainsInput)
], TenantCreateWithoutOrdersInput.prototype, "acceptedUserEmailDomains", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TenantCreateWithoutOrdersInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TenantCreateWithoutOrdersInput.prototype, "updatedAt", void 0);
TenantCreateWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantCreateWithoutOrdersInput", {
        isAbstract: true
    })
], TenantCreateWithoutOrdersInput);
exports.TenantCreateWithoutOrdersInput = TenantCreateWithoutOrdersInput;
