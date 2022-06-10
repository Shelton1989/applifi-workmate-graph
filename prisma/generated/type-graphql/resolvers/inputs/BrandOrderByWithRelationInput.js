"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandProductOrderByRelationAggregateInput_1 = require("../inputs/BrandProductOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let BrandOrderByWithRelationInput = class BrandOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandOrderByWithRelationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandOrderByWithRelationInput.prototype, "tagline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductOrderByRelationAggregateInput_1.BrandProductOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandProductOrderByRelationAggregateInput_1.BrandProductOrderByRelationAggregateInput)
], BrandOrderByWithRelationInput.prototype, "BrandProducts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandOrderByWithRelationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandOrderByWithRelationInput.prototype, "updatedAt", void 0);
BrandOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BrandOrderByWithRelationInput", {
        isAbstract: true
    })
], BrandOrderByWithRelationInput);
exports.BrandOrderByWithRelationInput = BrandOrderByWithRelationInput;
