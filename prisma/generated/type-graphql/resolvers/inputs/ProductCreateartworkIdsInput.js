"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateartworkIdsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ProductCreateartworkIdsInput = class ProductCreateartworkIdsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ProductCreateartworkIdsInput.prototype, "set", void 0);
ProductCreateartworkIdsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateartworkIdsInput", {
        isAbstract: true
    })
], ProductCreateartworkIdsInput);
exports.ProductCreateartworkIdsInput = ProductCreateartworkIdsInput;
