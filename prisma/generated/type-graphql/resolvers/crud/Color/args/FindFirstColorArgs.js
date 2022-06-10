"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstColorArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColorOrderByWithRelationInput_1 = require("../../../inputs/ColorOrderByWithRelationInput");
const ColorWhereInput_1 = require("../../../inputs/ColorWhereInput");
const ColorWhereUniqueInput_1 = require("../../../inputs/ColorWhereUniqueInput");
const ColorScalarFieldEnum_1 = require("../../../../enums/ColorScalarFieldEnum");
let FindFirstColorArgs = class FindFirstColorArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorWhereInput_1.ColorWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColorWhereInput_1.ColorWhereInput)
], FindFirstColorArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ColorOrderByWithRelationInput_1.ColorOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstColorArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorWhereUniqueInput_1.ColorWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColorWhereUniqueInput_1.ColorWhereUniqueInput)
], FindFirstColorArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstColorArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstColorArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ColorScalarFieldEnum_1.ColorScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstColorArgs.prototype, "distinct", void 0);
FindFirstColorArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstColorArgs);
exports.FindFirstColorArgs = FindFirstColorArgs;
