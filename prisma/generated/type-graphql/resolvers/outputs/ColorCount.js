"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ColorCount = class ColorCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ColorCount.prototype, "Products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ColorCount.prototype, "OrderLineItems", void 0);
ColorCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ColorCount", {
        isAbstract: true
    })
], ColorCount);
exports.ColorCount = ColorCount;
