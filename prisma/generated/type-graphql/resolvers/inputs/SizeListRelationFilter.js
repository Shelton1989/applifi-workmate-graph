"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SizeWhereInput_1 = require("../inputs/SizeWhereInput");
let SizeListRelationFilter = class SizeListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeWhereInput_1.SizeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SizeWhereInput_1.SizeWhereInput)
], SizeListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeWhereInput_1.SizeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SizeWhereInput_1.SizeWhereInput)
], SizeListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeWhereInput_1.SizeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SizeWhereInput_1.SizeWhereInput)
], SizeListRelationFilter.prototype, "none", void 0);
SizeListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("SizeListRelationFilter", {
        isAbstract: true
    })
], SizeListRelationFilter);
exports.SizeListRelationFilter = SizeListRelationFilter;
