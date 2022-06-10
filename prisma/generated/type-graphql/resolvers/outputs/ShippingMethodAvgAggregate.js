"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingMethodAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ShippingMethodAvgAggregate = class ShippingMethodAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ShippingMethodAvgAggregate.prototype, "arrivalTimeInBusinessDays", void 0);
ShippingMethodAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ShippingMethodAvgAggregate", {
        isAbstract: true
    })
], ShippingMethodAvgAggregate);
exports.ShippingMethodAvgAggregate = ShippingMethodAvgAggregate;
