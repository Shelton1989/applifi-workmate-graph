"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantUpdateWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const LocationUpdateManyWithoutTenantInput_1 = require("../inputs/LocationUpdateManyWithoutTenantInput");
const MealUpdateManyWithoutTenantInput_1 = require("../inputs/MealUpdateManyWithoutTenantInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TenantUpdateacceptedUserEmailDomainsInput_1 = require("../inputs/TenantUpdateacceptedUserEmailDomainsInput");
const TenantUpdateexperienceImagesInput_1 = require("../inputs/TenantUpdateexperienceImagesInput");
const UserUpdateManyWithoutTenantInput_1 = require("../inputs/UserUpdateManyWithoutTenantInput");
let TenantUpdateWithoutOrdersInput = class TenantUpdateWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TenantUpdateWithoutOrdersInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TenantUpdateWithoutOrdersInput.prototype, "slug", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TenantUpdateWithoutOrdersInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TenantUpdateWithoutOrdersInput.prototype, "logoImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TenantUpdateWithoutOrdersInput.prototype, "avatar", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TenantUpdateWithoutOrdersInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpdateexperienceImagesInput_1.TenantUpdateexperienceImagesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantUpdateexperienceImagesInput_1.TenantUpdateexperienceImagesInput)
], TenantUpdateWithoutOrdersInput.prototype, "experienceImages", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateManyWithoutTenantInput_1.UserUpdateManyWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateManyWithoutTenantInput_1.UserUpdateManyWithoutTenantInput)
], TenantUpdateWithoutOrdersInput.prototype, "Users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdateManyWithoutTenantInput_1.MealUpdateManyWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealUpdateManyWithoutTenantInput_1.MealUpdateManyWithoutTenantInput)
], TenantUpdateWithoutOrdersInput.prototype, "Meals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationUpdateManyWithoutTenantInput_1.LocationUpdateManyWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationUpdateManyWithoutTenantInput_1.LocationUpdateManyWithoutTenantInput)
], TenantUpdateWithoutOrdersInput.prototype, "Locations", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpdateacceptedUserEmailDomainsInput_1.TenantUpdateacceptedUserEmailDomainsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantUpdateacceptedUserEmailDomainsInput_1.TenantUpdateacceptedUserEmailDomainsInput)
], TenantUpdateWithoutOrdersInput.prototype, "acceptedUserEmailDomains", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TenantUpdateWithoutOrdersInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TenantUpdateWithoutOrdersInput.prototype, "updatedAt", void 0);
TenantUpdateWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantUpdateWithoutOrdersInput", {
        isAbstract: true
    })
], TenantUpdateWithoutOrdersInput);
exports.TenantUpdateWithoutOrdersInput = TenantUpdateWithoutOrdersInput;
