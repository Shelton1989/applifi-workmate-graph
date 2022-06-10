"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColorWhereInput_1 = require("../inputs/ColorWhereInput");
let ColorListRelationFilter = class ColorListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorWhereInput_1.ColorWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColorWhereInput_1.ColorWhereInput)
], ColorListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorWhereInput_1.ColorWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColorWhereInput_1.ColorWhereInput)
], ColorListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorWhereInput_1.ColorWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColorWhereInput_1.ColorWhereInput)
], ColorListRelationFilter.prototype, "none", void 0);
ColorListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ColorListRelationFilter", {
        isAbstract: true
    })
], ColorListRelationFilter);
exports.ColorListRelationFilter = ColorListRelationFilter;
