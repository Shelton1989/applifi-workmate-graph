"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdatecolorIdsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ProductUpdatecolorIdsInput = class ProductUpdatecolorIdsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdatecolorIdsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdatecolorIdsInput.prototype, "push", void 0);
ProductUpdatecolorIdsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpdatecolorIdsInput", {
        isAbstract: true
    })
], ProductUpdatecolorIdsInput);
exports.ProductUpdatecolorIdsInput = ProductUpdatecolorIdsInput;
