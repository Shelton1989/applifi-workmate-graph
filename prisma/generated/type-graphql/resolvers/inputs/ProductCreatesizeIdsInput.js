"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreatesizeIdsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ProductCreatesizeIdsInput = class ProductCreatesizeIdsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ProductCreatesizeIdsInput.prototype, "set", void 0);
ProductCreatesizeIdsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreatesizeIdsInput", {
        isAbstract: true
    })
], ProductCreatesizeIdsInput);
exports.ProductCreatesizeIdsInput = ProductCreatesizeIdsInput;
