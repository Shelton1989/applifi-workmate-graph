"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateartworkIdsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ProductUpdateartworkIdsInput = class ProductUpdateartworkIdsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateartworkIdsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateartworkIdsInput.prototype, "push", void 0);
ProductUpdateartworkIdsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpdateartworkIdsInput", {
        isAbstract: true
    })
], ProductUpdateartworkIdsInput);
exports.ProductUpdateartworkIdsInput = ProductUpdateartworkIdsInput;
