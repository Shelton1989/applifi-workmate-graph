"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantUpdateWithoutBookingOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const ExperienceUpdateManyWithoutTenantInput_1 = require("../inputs/ExperienceUpdateManyWithoutTenantInput");
const LocationUpdateManyWithoutTenantInput_1 = require("../inputs/LocationUpdateManyWithoutTenantInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TenantUpdateexperienceImagesInput_1 = require("../inputs/TenantUpdateexperienceImagesInput");
const UserUpdateManyWithoutTenantInput_1 = require("../inputs/UserUpdateManyWithoutTenantInput");
let TenantUpdateWithoutBookingOrdersInput = class TenantUpdateWithoutBookingOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TenantUpdateWithoutBookingOrdersInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TenantUpdateWithoutBookingOrdersInput.prototype, "slug", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TenantUpdateWithoutBookingOrdersInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TenantUpdateWithoutBookingOrdersInput.prototype, "logoImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TenantUpdateWithoutBookingOrdersInput.prototype, "avatar", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TenantUpdateWithoutBookingOrdersInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpdateexperienceImagesInput_1.TenantUpdateexperienceImagesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantUpdateexperienceImagesInput_1.TenantUpdateexperienceImagesInput)
], TenantUpdateWithoutBookingOrdersInput.prototype, "experienceImages", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateManyWithoutTenantInput_1.UserUpdateManyWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateManyWithoutTenantInput_1.UserUpdateManyWithoutTenantInput)
], TenantUpdateWithoutBookingOrdersInput.prototype, "Users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceUpdateManyWithoutTenantInput_1.ExperienceUpdateManyWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceUpdateManyWithoutTenantInput_1.ExperienceUpdateManyWithoutTenantInput)
], TenantUpdateWithoutBookingOrdersInput.prototype, "Experiences", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationUpdateManyWithoutTenantInput_1.LocationUpdateManyWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationUpdateManyWithoutTenantInput_1.LocationUpdateManyWithoutTenantInput)
], TenantUpdateWithoutBookingOrdersInput.prototype, "Locations", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TenantUpdateWithoutBookingOrdersInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TenantUpdateWithoutBookingOrdersInput.prototype, "updatedAt", void 0);
TenantUpdateWithoutBookingOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantUpdateWithoutBookingOrdersInput", {
        isAbstract: true
    })
], TenantUpdateWithoutBookingOrdersInput);
exports.TenantUpdateWithoutBookingOrdersInput = TenantUpdateWithoutBookingOrdersInput;
