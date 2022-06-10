"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorCreateOrConnectWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColorCreateWithoutProductsInput_1 = require("../inputs/ColorCreateWithoutProductsInput");
const ColorWhereUniqueInput_1 = require("../inputs/ColorWhereUniqueInput");
let ColorCreateOrConnectWithoutProductsInput = class ColorCreateOrConnectWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorWhereUniqueInput_1.ColorWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ColorWhereUniqueInput_1.ColorWhereUniqueInput)
], ColorCreateOrConnectWithoutProductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorCreateWithoutProductsInput_1.ColorCreateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ColorCreateWithoutProductsInput_1.ColorCreateWithoutProductsInput)
], ColorCreateOrConnectWithoutProductsInput.prototype, "create", void 0);
ColorCreateOrConnectWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ColorCreateOrConnectWithoutProductsInput", {
        isAbstract: true
    })
], ColorCreateOrConnectWithoutProductsInput);
exports.ColorCreateOrConnectWithoutProductsInput = ColorCreateOrConnectWithoutProductsInput;
