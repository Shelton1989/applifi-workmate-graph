"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorUpdateManyWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColorCreateOrConnectWithoutProductsInput_1 = require("../inputs/ColorCreateOrConnectWithoutProductsInput");
const ColorCreateWithoutProductsInput_1 = require("../inputs/ColorCreateWithoutProductsInput");
const ColorScalarWhereInput_1 = require("../inputs/ColorScalarWhereInput");
const ColorUpdateManyWithWhereWithoutProductsInput_1 = require("../inputs/ColorUpdateManyWithWhereWithoutProductsInput");
const ColorUpdateWithWhereUniqueWithoutProductsInput_1 = require("../inputs/ColorUpdateWithWhereUniqueWithoutProductsInput");
const ColorUpsertWithWhereUniqueWithoutProductsInput_1 = require("../inputs/ColorUpsertWithWhereUniqueWithoutProductsInput");
const ColorWhereUniqueInput_1 = require("../inputs/ColorWhereUniqueInput");
let ColorUpdateManyWithoutProductsInput = class ColorUpdateManyWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ColorCreateWithoutProductsInput_1.ColorCreateWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ColorUpdateManyWithoutProductsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ColorCreateOrConnectWithoutProductsInput_1.ColorCreateOrConnectWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ColorUpdateManyWithoutProductsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ColorUpsertWithWhereUniqueWithoutProductsInput_1.ColorUpsertWithWhereUniqueWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ColorUpdateManyWithoutProductsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ColorWhereUniqueInput_1.ColorWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ColorUpdateManyWithoutProductsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ColorWhereUniqueInput_1.ColorWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ColorUpdateManyWithoutProductsInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ColorWhereUniqueInput_1.ColorWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ColorUpdateManyWithoutProductsInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ColorWhereUniqueInput_1.ColorWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ColorUpdateManyWithoutProductsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ColorUpdateWithWhereUniqueWithoutProductsInput_1.ColorUpdateWithWhereUniqueWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ColorUpdateManyWithoutProductsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ColorUpdateManyWithWhereWithoutProductsInput_1.ColorUpdateManyWithWhereWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ColorUpdateManyWithoutProductsInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ColorScalarWhereInput_1.ColorScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ColorUpdateManyWithoutProductsInput.prototype, "deleteMany", void 0);
ColorUpdateManyWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ColorUpdateManyWithoutProductsInput", {
        isAbstract: true
    })
], ColorUpdateManyWithoutProductsInput);
exports.ColorUpdateManyWithoutProductsInput = ColorUpdateManyWithoutProductsInput;
