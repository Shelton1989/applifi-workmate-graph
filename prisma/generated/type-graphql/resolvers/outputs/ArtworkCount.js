"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtworkCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ArtworkCount = class ArtworkCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ArtworkCount.prototype, "Products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ArtworkCount.prototype, "OrderLineItems", void 0);
ArtworkCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ArtworkCount", {
        isAbstract: true
    })
], ArtworkCount);
exports.ArtworkCount = ArtworkCount;
