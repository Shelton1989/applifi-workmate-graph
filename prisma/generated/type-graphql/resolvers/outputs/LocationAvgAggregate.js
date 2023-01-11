"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let LocationAvgAggregate = class LocationAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], LocationAvgAggregate.prototype, "longitude", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], LocationAvgAggregate.prototype, "latitude", void 0);
LocationAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("LocationAvgAggregate", {
        isAbstract: true
    })
], LocationAvgAggregate);
exports.LocationAvgAggregate = LocationAvgAggregate;
