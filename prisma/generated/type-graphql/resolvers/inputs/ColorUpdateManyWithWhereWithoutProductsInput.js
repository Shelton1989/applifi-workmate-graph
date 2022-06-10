"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorUpdateManyWithWhereWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColorScalarWhereInput_1 = require("../inputs/ColorScalarWhereInput");
const ColorUpdateManyMutationInput_1 = require("../inputs/ColorUpdateManyMutationInput");
let ColorUpdateManyWithWhereWithoutProductsInput = class ColorUpdateManyWithWhereWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorScalarWhereInput_1.ColorScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ColorScalarWhereInput_1.ColorScalarWhereInput)
], ColorUpdateManyWithWhereWithoutProductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorUpdateManyMutationInput_1.ColorUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ColorUpdateManyMutationInput_1.ColorUpdateManyMutationInput)
], ColorUpdateManyWithWhereWithoutProductsInput.prototype, "data", void 0);
ColorUpdateManyWithWhereWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ColorUpdateManyWithWhereWithoutProductsInput", {
        isAbstract: true
    })
], ColorUpdateManyWithWhereWithoutProductsInput);
exports.ColorUpdateManyWithWhereWithoutProductsInput = ColorUpdateManyWithWhereWithoutProductsInput;
