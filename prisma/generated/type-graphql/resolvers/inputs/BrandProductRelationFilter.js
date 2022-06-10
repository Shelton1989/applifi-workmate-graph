"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandProductRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandProductWhereInput_1 = require("../inputs/BrandProductWhereInput");
let BrandProductRelationFilter = class BrandProductRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductWhereInput_1.BrandProductWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandProductWhereInput_1.BrandProductWhereInput)
], BrandProductRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductWhereInput_1.BrandProductWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandProductWhereInput_1.BrandProductWhereInput)
], BrandProductRelationFilter.prototype, "isNot", void 0);
BrandProductRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("BrandProductRelationFilter", {
        isAbstract: true
    })
], BrandProductRelationFilter);
exports.BrandProductRelationFilter = BrandProductRelationFilter;
