"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LocationAvgOrderByAggregateInput_1 = require("../inputs/LocationAvgOrderByAggregateInput");
const LocationCountOrderByAggregateInput_1 = require("../inputs/LocationCountOrderByAggregateInput");
const LocationMaxOrderByAggregateInput_1 = require("../inputs/LocationMaxOrderByAggregateInput");
const LocationMinOrderByAggregateInput_1 = require("../inputs/LocationMinOrderByAggregateInput");
const LocationSumOrderByAggregateInput_1 = require("../inputs/LocationSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let LocationOrderByWithAggregationInput = class LocationOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LocationOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LocationOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LocationOrderByWithAggregationInput.prototype, "longitude", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LocationOrderByWithAggregationInput.prototype, "latitude", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LocationOrderByWithAggregationInput.prototype, "googleMapsUrl", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LocationOrderByWithAggregationInput.prototype, "googlePlacesId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LocationOrderByWithAggregationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LocationOrderByWithAggregationInput.prototype, "line1", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LocationOrderByWithAggregationInput.prototype, "line2", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LocationOrderByWithAggregationInput.prototype, "city", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LocationOrderByWithAggregationInput.prototype, "district", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LocationOrderByWithAggregationInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LocationOrderByWithAggregationInput.prototype, "code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LocationOrderByWithAggregationInput.prototype, "isDefault", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LocationOrderByWithAggregationInput.prototype, "experienceId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LocationOrderByWithAggregationInput.prototype, "tenantId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LocationOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LocationOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationCountOrderByAggregateInput_1.LocationCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationCountOrderByAggregateInput_1.LocationCountOrderByAggregateInput)
], LocationOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationAvgOrderByAggregateInput_1.LocationAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationAvgOrderByAggregateInput_1.LocationAvgOrderByAggregateInput)
], LocationOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationMaxOrderByAggregateInput_1.LocationMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationMaxOrderByAggregateInput_1.LocationMaxOrderByAggregateInput)
], LocationOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationMinOrderByAggregateInput_1.LocationMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationMinOrderByAggregateInput_1.LocationMinOrderByAggregateInput)
], LocationOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationSumOrderByAggregateInput_1.LocationSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationSumOrderByAggregateInput_1.LocationSumOrderByAggregateInput)
], LocationOrderByWithAggregationInput.prototype, "_sum", void 0);
LocationOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LocationOrderByWithAggregationInput", {
        isAbstract: true
    })
], LocationOrderByWithAggregationInput);
exports.LocationOrderByWithAggregationInput = LocationOrderByWithAggregationInput;
