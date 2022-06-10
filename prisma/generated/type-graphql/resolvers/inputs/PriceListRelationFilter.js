"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriceWhereInput_1 = require("../inputs/PriceWhereInput");
let PriceListRelationFilter = class PriceListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceWhereInput_1.PriceWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceWhereInput_1.PriceWhereInput)
], PriceListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceWhereInput_1.PriceWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceWhereInput_1.PriceWhereInput)
], PriceListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceWhereInput_1.PriceWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceWhereInput_1.PriceWhereInput)
], PriceListRelationFilter.prototype, "none", void 0);
PriceListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceListRelationFilter", {
        isAbstract: true
    })
], PriceListRelationFilter);
exports.PriceListRelationFilter = PriceListRelationFilter;
