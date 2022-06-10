"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColorCreateproductIdsInput_1 = require("../inputs/ColorCreateproductIdsInput");
let ColorCreateManyInput = class ColorCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ColorCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ColorCreateManyInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ColorCreateManyInput.prototype, "hex", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorCreateproductIdsInput_1.ColorCreateproductIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColorCreateproductIdsInput_1.ColorCreateproductIdsInput)
], ColorCreateManyInput.prototype, "productIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ColorCreateManyInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ColorCreateManyInput.prototype, "updatedAt", void 0);
ColorCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ColorCreateManyInput", {
        isAbstract: true
    })
], ColorCreateManyInput);
exports.ColorCreateManyInput = ColorCreateManyInput;
