"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductColorsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColorOrderByWithRelationInput_1 = require("../../../inputs/ColorOrderByWithRelationInput");
const ColorWhereInput_1 = require("../../../inputs/ColorWhereInput");
const ColorWhereUniqueInput_1 = require("../../../inputs/ColorWhereUniqueInput");
const ColorScalarFieldEnum_1 = require("../../../../enums/ColorScalarFieldEnum");
let ProductColorsArgs = class ProductColorsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorWhereInput_1.ColorWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColorWhereInput_1.ColorWhereInput)
], ProductColorsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ColorOrderByWithRelationInput_1.ColorOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductColorsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorWhereUniqueInput_1.ColorWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColorWhereUniqueInput_1.ColorWhereUniqueInput)
], ProductColorsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProductColorsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProductColorsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ColorScalarFieldEnum_1.ColorScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductColorsArgs.prototype, "distinct", void 0);
ProductColorsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], ProductColorsArgs);
exports.ProductColorsArgs = ProductColorsArgs;
