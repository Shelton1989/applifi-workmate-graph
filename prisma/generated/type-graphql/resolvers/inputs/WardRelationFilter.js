"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WardRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WardWhereInput_1 = require("../inputs/WardWhereInput");
let WardRelationFilter = class WardRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WardWhereInput_1.WardWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WardWhereInput_1.WardWhereInput)
], WardRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WardWhereInput_1.WardWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WardWhereInput_1.WardWhereInput)
], WardRelationFilter.prototype, "isNot", void 0);
WardRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("WardRelationFilter", {
        isAbstract: true
    })
], WardRelationFilter);
exports.WardRelationFilter = WardRelationFilter;
