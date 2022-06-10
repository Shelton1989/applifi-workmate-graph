"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingMethodCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ShippingMethodCount = class ShippingMethodCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ShippingMethodCount.prototype, "Orders", void 0);
ShippingMethodCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ShippingMethodCount", {
        isAbstract: true
    })
], ShippingMethodCount);
exports.ShippingMethodCount = ShippingMethodCount;
