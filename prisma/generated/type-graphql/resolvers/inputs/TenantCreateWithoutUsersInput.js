"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantCreateWithoutUsersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LocationCreateNestedManyWithoutTenantInput_1 = require("../inputs/LocationCreateNestedManyWithoutTenantInput");
const MealCreateNestedManyWithoutTenantInput_1 = require("../inputs/MealCreateNestedManyWithoutTenantInput");
const OrderCreateNestedManyWithoutTenantInput_1 = require("../inputs/OrderCreateNestedManyWithoutTenantInput");
const TenantCreateacceptedUserEmailDomainsInput_1 = require("../inputs/TenantCreateacceptedUserEmailDomainsInput");
const TenantCreateexperienceImagesInput_1 = require("../inputs/TenantCreateexperienceImagesInput");
let TenantCreateWithoutUsersInput = class TenantCreateWithoutUsersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateWithoutUsersInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateWithoutUsersInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateWithoutUsersInput.prototype, "slug", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateWithoutUsersInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateWithoutUsersInput.prototype, "logoImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateWithoutUsersInput.prototype, "avatar", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateWithoutUsersInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateexperienceImagesInput_1.TenantCreateexperienceImagesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCreateexperienceImagesInput_1.TenantCreateexperienceImagesInput)
], TenantCreateWithoutUsersInput.prototype, "experienceImages", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateNestedManyWithoutTenantInput_1.MealCreateNestedManyWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreateNestedManyWithoutTenantInput_1.MealCreateNestedManyWithoutTenantInput)
], TenantCreateWithoutUsersInput.prototype, "Meals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateNestedManyWithoutTenantInput_1.OrderCreateNestedManyWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateNestedManyWithoutTenantInput_1.OrderCreateNestedManyWithoutTenantInput)
], TenantCreateWithoutUsersInput.prototype, "Orders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationCreateNestedManyWithoutTenantInput_1.LocationCreateNestedManyWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationCreateNestedManyWithoutTenantInput_1.LocationCreateNestedManyWithoutTenantInput)
], TenantCreateWithoutUsersInput.prototype, "Locations", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateacceptedUserEmailDomainsInput_1.TenantCreateacceptedUserEmailDomainsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCreateacceptedUserEmailDomainsInput_1.TenantCreateacceptedUserEmailDomainsInput)
], TenantCreateWithoutUsersInput.prototype, "acceptedUserEmailDomains", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TenantCreateWithoutUsersInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TenantCreateWithoutUsersInput.prototype, "updatedAt", void 0);
TenantCreateWithoutUsersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantCreateWithoutUsersInput", {
        isAbstract: true
    })
], TenantCreateWithoutUsersInput);
exports.TenantCreateWithoutUsersInput = TenantCreateWithoutUsersInput;
