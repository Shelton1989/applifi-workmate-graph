"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceCreateNestedOneWithoutLocationsInput_1 = require("../inputs/ExperienceCreateNestedOneWithoutLocationsInput");
const TenantCreateNestedOneWithoutLocationsInput_1 = require("../inputs/TenantCreateNestedOneWithoutLocationsInput");
const ADDRESS_TYPE_1 = require("../../enums/ADDRESS_TYPE");
let LocationCreateInput = class LocationCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LocationCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LocationCreateInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], LocationCreateInput.prototype, "longitude", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], LocationCreateInput.prototype, "latitude", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LocationCreateInput.prototype, "googleMapsUrl", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LocationCreateInput.prototype, "googlePlacesId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ADDRESS_TYPE_1.ADDRESS_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LocationCreateInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LocationCreateInput.prototype, "line1", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LocationCreateInput.prototype, "line2", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LocationCreateInput.prototype, "city", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LocationCreateInput.prototype, "district", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LocationCreateInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LocationCreateInput.prototype, "code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], LocationCreateInput.prototype, "isDefault", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateNestedOneWithoutLocationsInput_1.ExperienceCreateNestedOneWithoutLocationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreateNestedOneWithoutLocationsInput_1.ExperienceCreateNestedOneWithoutLocationsInput)
], LocationCreateInput.prototype, "Experience", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateNestedOneWithoutLocationsInput_1.TenantCreateNestedOneWithoutLocationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCreateNestedOneWithoutLocationsInput_1.TenantCreateNestedOneWithoutLocationsInput)
], LocationCreateInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], LocationCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], LocationCreateInput.prototype, "updatedAt", void 0);
LocationCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LocationCreateInput", {
        isAbstract: true
    })
], LocationCreateInput);
exports.LocationCreateInput = LocationCreateInput;
