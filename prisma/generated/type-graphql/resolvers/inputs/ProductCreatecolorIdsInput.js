"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreatecolorIdsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ProductCreatecolorIdsInput = class ProductCreatecolorIdsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ProductCreatecolorIdsInput.prototype, "set", void 0);
ProductCreatecolorIdsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreatecolorIdsInput", {
        isAbstract: true
    })
], ProductCreatecolorIdsInput);
exports.ProductCreatecolorIdsInput = ProductCreatecolorIdsInput;
