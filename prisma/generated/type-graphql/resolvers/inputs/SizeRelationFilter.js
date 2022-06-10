"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SizeWhereInput_1 = require("../inputs/SizeWhereInput");
let SizeRelationFilter = class SizeRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeWhereInput_1.SizeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SizeWhereInput_1.SizeWhereInput)
], SizeRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeWhereInput_1.SizeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SizeWhereInput_1.SizeWhereInput)
], SizeRelationFilter.prototype, "isNot", void 0);
SizeRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("SizeRelationFilter", {
        isAbstract: true
    })
], SizeRelationFilter);
exports.SizeRelationFilter = SizeRelationFilter;
