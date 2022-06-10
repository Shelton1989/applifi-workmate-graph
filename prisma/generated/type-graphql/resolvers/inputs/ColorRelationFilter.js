"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColorWhereInput_1 = require("../inputs/ColorWhereInput");
let ColorRelationFilter = class ColorRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorWhereInput_1.ColorWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColorWhereInput_1.ColorWhereInput)
], ColorRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorWhereInput_1.ColorWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColorWhereInput_1.ColorWhereInput)
], ColorRelationFilter.prototype, "isNot", void 0);
ColorRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ColorRelationFilter", {
        isAbstract: true
    })
], ColorRelationFilter);
exports.ColorRelationFilter = ColorRelationFilter;
