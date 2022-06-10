"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreategalleryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ProductCreategalleryInput = class ProductCreategalleryInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ProductCreategalleryInput.prototype, "set", void 0);
ProductCreategalleryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreategalleryInput", {
        isAbstract: true
    })
], ProductCreategalleryInput);
exports.ProductCreategalleryInput = ProductCreategalleryInput;
