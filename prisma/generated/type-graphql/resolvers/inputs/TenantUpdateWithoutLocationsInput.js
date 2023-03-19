"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantUpdateWithoutLocationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const MealUpdateManyWithoutTenantInput_1 = require("../inputs/MealUpdateManyWithoutTenantInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const OrderUpdateManyWithoutTenantInput_1 = require("../inputs/OrderUpdateManyWithoutTenantInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TenantUpdateacceptedUserEmailDomainsInput_1 = require("../inputs/TenantUpdateacceptedUserEmailDomainsInput");
const TenantUpdateexperienceImagesInput_1 = require("../inputs/TenantUpdateexperienceImagesInput");
const UserUpdateManyWithoutTenantInput_1 = require("../inputs/UserUpdateManyWithoutTenantInput");
let TenantUpdateWithoutLocationsInput = class TenantUpdateWithoutLocationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TenantUpdateWithoutLocationsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TenantUpdateWithoutLocationsInput.prototype, "slug", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TenantUpdateWithoutLocationsInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TenantUpdateWithoutLocationsInput.prototype, "logoImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TenantUpdateWithoutLocationsInput.prototype, "avatar", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TenantUpdateWithoutLocationsInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpdateexperienceImagesInput_1.TenantUpdateexperienceImagesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantUpdateexperienceImagesInput_1.TenantUpdateexperienceImagesInput)
], TenantUpdateWithoutLocationsInput.prototype, "experienceImages", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateManyWithoutTenantInput_1.UserUpdateManyWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateManyWithoutTenantInput_1.UserUpdateManyWithoutTenantInput)
], TenantUpdateWithoutLocationsInput.prototype, "Users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdateManyWithoutTenantInput_1.MealUpdateManyWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealUpdateManyWithoutTenantInput_1.MealUpdateManyWithoutTenantInput)
], TenantUpdateWithoutLocationsInput.prototype, "Meals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateManyWithoutTenantInput_1.OrderUpdateManyWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderUpdateManyWithoutTenantInput_1.OrderUpdateManyWithoutTenantInput)
], TenantUpdateWithoutLocationsInput.prototype, "Orders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpdateacceptedUserEmailDomainsInput_1.TenantUpdateacceptedUserEmailDomainsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantUpdateacceptedUserEmailDomainsInput_1.TenantUpdateacceptedUserEmailDomainsInput)
], TenantUpdateWithoutLocationsInput.prototype, "acceptedUserEmailDomains", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TenantUpdateWithoutLocationsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TenantUpdateWithoutLocationsInput.prototype, "updatedAt", void 0);
TenantUpdateWithoutLocationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantUpdateWithoutLocationsInput", {
        isAbstract: true
    })
], TenantUpdateWithoutLocationsInput);
exports.TenantUpdateWithoutLocationsInput = TenantUpdateWithoutLocationsInput;
