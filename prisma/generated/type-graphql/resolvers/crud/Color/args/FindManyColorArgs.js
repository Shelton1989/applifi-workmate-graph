"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyColorArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColorOrderByWithRelationInput_1 = require("../../../inputs/ColorOrderByWithRelationInput");
const ColorWhereInput_1 = require("../../../inputs/ColorWhereInput");
const ColorWhereUniqueInput_1 = require("../../../inputs/ColorWhereUniqueInput");
const ColorScalarFieldEnum_1 = require("../../../../enums/ColorScalarFieldEnum");
let FindManyColorArgs = class FindManyColorArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorWhereInput_1.ColorWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColorWhereInput_1.ColorWhereInput)
], FindManyColorArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ColorOrderByWithRelationInput_1.ColorOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyColorArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorWhereUniqueInput_1.ColorWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColorWhereUniqueInput_1.ColorWhereUniqueInput)
], FindManyColorArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyColorArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyColorArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ColorScalarFieldEnum_1.ColorScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyColorArgs.prototype, "distinct", void 0);
FindManyColorArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyColorArgs);
exports.FindManyColorArgs = FindManyColorArgs;
