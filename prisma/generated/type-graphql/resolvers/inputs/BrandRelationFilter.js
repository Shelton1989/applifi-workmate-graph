"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandWhereInput_1 = require("../inputs/BrandWhereInput");
let BrandRelationFilter = class BrandRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandWhereInput_1.BrandWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandWhereInput_1.BrandWhereInput)
], BrandRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandWhereInput_1.BrandWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandWhereInput_1.BrandWhereInput)
], BrandRelationFilter.prototype, "isNot", void 0);
BrandRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("BrandRelationFilter", {
        isAbstract: true
    })
], BrandRelationFilter);
exports.BrandRelationFilter = BrandRelationFilter;
