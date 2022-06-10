"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorCreateproductIdsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ColorCreateproductIdsInput = class ColorCreateproductIdsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ColorCreateproductIdsInput.prototype, "set", void 0);
ColorCreateproductIdsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ColorCreateproductIdsInput", {
        isAbstract: true
    })
], ColorCreateproductIdsInput);
exports.ColorCreateproductIdsInput = ColorCreateproductIdsInput;
