"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandProductCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let BrandProductCount = class BrandProductCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], BrandProductCount.prototype, "Products", void 0);
BrandProductCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("BrandProductCount", {
        isAbstract: true
    })
], BrandProductCount);
exports.BrandProductCount = BrandProductCount;
