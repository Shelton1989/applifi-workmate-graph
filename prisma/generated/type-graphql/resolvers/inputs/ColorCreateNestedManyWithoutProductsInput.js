"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorCreateNestedManyWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColorCreateOrConnectWithoutProductsInput_1 = require("../inputs/ColorCreateOrConnectWithoutProductsInput");
const ColorCreateWithoutProductsInput_1 = require("../inputs/ColorCreateWithoutProductsInput");
const ColorWhereUniqueInput_1 = require("../inputs/ColorWhereUniqueInput");
let ColorCreateNestedManyWithoutProductsInput = class ColorCreateNestedManyWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ColorCreateWithoutProductsInput_1.ColorCreateWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ColorCreateNestedManyWithoutProductsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ColorCreateOrConnectWithoutProductsInput_1.ColorCreateOrConnectWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ColorCreateNestedManyWithoutProductsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ColorWhereUniqueInput_1.ColorWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ColorCreateNestedManyWithoutProductsInput.prototype, "connect", void 0);
ColorCreateNestedManyWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ColorCreateNestedManyWithoutProductsInput", {
        isAbstract: true
    })
], ColorCreateNestedManyWithoutProductsInput);
exports.ColorCreateNestedManyWithoutProductsInput = ColorCreateNestedManyWithoutProductsInput;
