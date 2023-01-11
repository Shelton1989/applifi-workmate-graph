"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LocationAvgAggregate_1 = require("../outputs/LocationAvgAggregate");
const LocationCountAggregate_1 = require("../outputs/LocationCountAggregate");
const LocationMaxAggregate_1 = require("../outputs/LocationMaxAggregate");
const LocationMinAggregate_1 = require("../outputs/LocationMinAggregate");
const LocationSumAggregate_1 = require("../outputs/LocationSumAggregate");
const ADDRESS_TYPE_1 = require("../../enums/ADDRESS_TYPE");
let LocationGroupBy = class LocationGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LocationGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], LocationGroupBy.prototype, "longitude", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], LocationGroupBy.prototype, "latitude", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LocationGroupBy.prototype, "googleMapsUrl", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LocationGroupBy.prototype, "googlePlacesId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ADDRESS_TYPE_1.ADDRESS_TYPE, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LocationGroupBy.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LocationGroupBy.prototype, "line1", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LocationGroupBy.prototype, "line2", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LocationGroupBy.prototype, "city", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LocationGroupBy.prototype, "district", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LocationGroupBy.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LocationGroupBy.prototype, "code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], LocationGroupBy.prototype, "isDefault", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LocationGroupBy.prototype, "experienceId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LocationGroupBy.prototype, "tenantId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], LocationGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], LocationGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationCountAggregate_1.LocationCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationCountAggregate_1.LocationCountAggregate)
], LocationGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationAvgAggregate_1.LocationAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationAvgAggregate_1.LocationAvgAggregate)
], LocationGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationSumAggregate_1.LocationSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationSumAggregate_1.LocationSumAggregate)
], LocationGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationMinAggregate_1.LocationMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationMinAggregate_1.LocationMinAggregate)
], LocationGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationMaxAggregate_1.LocationMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationMaxAggregate_1.LocationMaxAggregate)
], LocationGroupBy.prototype, "_max", void 0);
LocationGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("LocationGroupBy", {
        isAbstract: true
    })
], LocationGroupBy);
exports.LocationGroupBy = LocationGroupBy;
