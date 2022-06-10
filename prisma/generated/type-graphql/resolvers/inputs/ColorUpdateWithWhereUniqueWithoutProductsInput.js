"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorUpdateWithWhereUniqueWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColorUpdateWithoutProductsInput_1 = require("../inputs/ColorUpdateWithoutProductsInput");
const ColorWhereUniqueInput_1 = require("../inputs/ColorWhereUniqueInput");
let ColorUpdateWithWhereUniqueWithoutProductsInput = class ColorUpdateWithWhereUniqueWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorWhereUniqueInput_1.ColorWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ColorWhereUniqueInput_1.ColorWhereUniqueInput)
], ColorUpdateWithWhereUniqueWithoutProductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorUpdateWithoutProductsInput_1.ColorUpdateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ColorUpdateWithoutProductsInput_1.ColorUpdateWithoutProductsInput)
], ColorUpdateWithWhereUniqueWithoutProductsInput.prototype, "data", void 0);
ColorUpdateWithWhereUniqueWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ColorUpdateWithWhereUniqueWithoutProductsInput", {
        isAbstract: true
    })
], ColorUpdateWithWhereUniqueWithoutProductsInput);
exports.ColorUpdateWithWhereUniqueWithoutProductsInput = ColorUpdateWithWhereUniqueWithoutProductsInput;
