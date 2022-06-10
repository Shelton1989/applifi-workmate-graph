"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreatelikedByIdsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ProductCreatelikedByIdsInput = class ProductCreatelikedByIdsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ProductCreatelikedByIdsInput.prototype, "set", void 0);
ProductCreatelikedByIdsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreatelikedByIdsInput", {
        isAbstract: true
    })
], ProductCreatelikedByIdsInput);
exports.ProductCreatelikedByIdsInput = ProductCreatelikedByIdsInput;
