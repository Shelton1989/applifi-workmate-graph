"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let LocationSumAggregate = class LocationSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], LocationSumAggregate.prototype, "longitude", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], LocationSumAggregate.prototype, "latitude", void 0);
LocationSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("LocationSumAggregate", {
        isAbstract: true
    })
], LocationSumAggregate);
exports.LocationSumAggregate = LocationSumAggregate;
