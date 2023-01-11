"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let LocationSumOrderByAggregateInput = class LocationSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LocationSumOrderByAggregateInput.prototype, "longitude", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LocationSumOrderByAggregateInput.prototype, "latitude", void 0);
LocationSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LocationSumOrderByAggregateInput", {
        isAbstract: true
    })
], LocationSumOrderByAggregateInput);
exports.LocationSumOrderByAggregateInput = LocationSumOrderByAggregateInput;
