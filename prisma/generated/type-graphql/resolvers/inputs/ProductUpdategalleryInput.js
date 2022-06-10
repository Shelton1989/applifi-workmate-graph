"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdategalleryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ProductUpdategalleryInput = class ProductUpdategalleryInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdategalleryInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdategalleryInput.prototype, "push", void 0);
ProductUpdategalleryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpdategalleryInput", {
        isAbstract: true
    })
], ProductUpdategalleryInput);
exports.ProductUpdategalleryInput = ProductUpdategalleryInput;
