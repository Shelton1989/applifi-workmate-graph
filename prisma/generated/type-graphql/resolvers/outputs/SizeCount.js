"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let SizeCount = class SizeCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], SizeCount.prototype, "Products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], SizeCount.prototype, "OrderLineItems", void 0);
SizeCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SizeCount", {
        isAbstract: true
    })
], SizeCount);
exports.SizeCount = SizeCount;
