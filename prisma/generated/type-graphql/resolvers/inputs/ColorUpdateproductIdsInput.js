"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorUpdateproductIdsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ColorUpdateproductIdsInput = class ColorUpdateproductIdsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ColorUpdateproductIdsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ColorUpdateproductIdsInput.prototype, "push", void 0);
ColorUpdateproductIdsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ColorUpdateproductIdsInput", {
        isAbstract: true
    })
], ColorUpdateproductIdsInput);
exports.ColorUpdateproductIdsInput = ColorUpdateproductIdsInput;
