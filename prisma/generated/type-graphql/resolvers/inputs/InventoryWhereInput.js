"use strict";
var InventoryWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkListRelationFilter_1 = require("../inputs/ArtworkListRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const ProductListRelationFilter_1 = require("../inputs/ProductListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let InventoryWhereInput = InventoryWhereInput_1 = class InventoryWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InventoryWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InventoryWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InventoryWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], InventoryWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductListRelationFilter_1.ProductListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductListRelationFilter_1.ProductListRelationFilter)
], InventoryWhereInput.prototype, "Products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkListRelationFilter_1.ArtworkListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkListRelationFilter_1.ArtworkListRelationFilter)
], InventoryWhereInput.prototype, "Artwork", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], InventoryWhereInput.prototype, "User", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], InventoryWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], InventoryWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], InventoryWhereInput.prototype, "updatedAt", void 0);
InventoryWhereInput = InventoryWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryWhereInput", {
        isAbstract: true
    })
], InventoryWhereInput);
exports.InventoryWhereInput = InventoryWhereInput;
