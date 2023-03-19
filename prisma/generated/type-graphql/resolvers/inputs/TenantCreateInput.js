"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LocationCreateNestedManyWithoutTenantInput_1 = require("../inputs/LocationCreateNestedManyWithoutTenantInput");
const MealCreateNestedManyWithoutTenantInput_1 = require("../inputs/MealCreateNestedManyWithoutTenantInput");
const OrderCreateNestedManyWithoutTenantInput_1 = require("../inputs/OrderCreateNestedManyWithoutTenantInput");
const TenantCreateacceptedUserEmailDomainsInput_1 = require("../inputs/TenantCreateacceptedUserEmailDomainsInput");
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
    TypeGraphQL.Field(_type => MealCreateNestedManyWithoutTenantInput_1.MealCreateNestedManyWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreateNestedManyWithoutTenantInput_1.MealCreateNestedManyWithoutTenantInput)
], TenantCreateInput.prototype, "Meals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateNestedManyWithoutTenantInput_1.OrderCreateNestedManyWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateNestedManyWithoutTenantInput_1.OrderCreateNestedManyWithoutTenantInput)
], TenantCreateInput.prototype, "Orders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationCreateNestedManyWithoutTenantInput_1.LocationCreateNestedManyWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationCreateNestedManyWithoutTenantInput_1.LocationCreateNestedManyWithoutTenantInput)
], TenantCreateInput.prototype, "Locations", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateacceptedUserEmailDomainsInput_1.TenantCreateacceptedUserEmailDomainsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCreateacceptedUserEmailDomainsInput_1.TenantCreateacceptedUserEmailDomainsInput)
], TenantCreateInput.prototype, "acceptedUserEmailDomains", void 0);
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
