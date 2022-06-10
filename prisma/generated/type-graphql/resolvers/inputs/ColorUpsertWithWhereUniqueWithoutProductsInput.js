"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorUpsertWithWhereUniqueWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColorCreateWithoutProductsInput_1 = require("../inputs/ColorCreateWithoutProductsInput");
const ColorUpdateWithoutProductsInput_1 = require("../inputs/ColorUpdateWithoutProductsInput");
const ColorWhereUniqueInput_1 = require("../inputs/ColorWhereUniqueInput");
let ColorUpsertWithWhereUniqueWithoutProductsInput = class ColorUpsertWithWhereUniqueWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorWhereUniqueInput_1.ColorWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ColorWhereUniqueInput_1.ColorWhereUniqueInput)
], ColorUpsertWithWhereUniqueWithoutProductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorUpdateWithoutProductsInput_1.ColorUpdateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ColorUpdateWithoutProductsInput_1.ColorUpdateWithoutProductsInput)
], ColorUpsertWithWhereUniqueWithoutProductsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorCreateWithoutProductsInput_1.ColorCreateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ColorCreateWithoutProductsInput_1.ColorCreateWithoutProductsInput)
], ColorUpsertWithWhereUniqueWithoutProductsInput.prototype, "create", void 0);
ColorUpsertWithWhereUniqueWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ColorUpsertWithWhereUniqueWithoutProductsInput", {
        isAbstract: true
    })
], ColorUpsertWithWhereUniqueWithoutProductsInput);
exports.ColorUpsertWithWhereUniqueWithoutProductsInput = ColorUpsertWithWhereUniqueWithoutProductsInput;
