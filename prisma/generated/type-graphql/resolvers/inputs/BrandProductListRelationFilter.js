"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandProductListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandProductWhereInput_1 = require("../inputs/BrandProductWhereInput");
let BrandProductListRelationFilter = class BrandProductListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductWhereInput_1.BrandProductWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandProductWhereInput_1.BrandProductWhereInput)
], BrandProductListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductWhereInput_1.BrandProductWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandProductWhereInput_1.BrandProductWhereInput)
], BrandProductListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductWhereInput_1.BrandProductWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandProductWhereInput_1.BrandProductWhereInput)
], BrandProductListRelationFilter.prototype, "none", void 0);
BrandProductListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("BrandProductListRelationFilter", {
        isAbstract: true
    })
], BrandProductListRelationFilter);
exports.BrandProductListRelationFilter = BrandProductListRelationFilter;
