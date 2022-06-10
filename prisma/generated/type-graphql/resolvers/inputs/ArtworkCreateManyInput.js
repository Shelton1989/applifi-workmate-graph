"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtworkCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkCreateproductIdsInput_1 = require("../inputs/ArtworkCreateproductIdsInput");
let ArtworkCreateManyInput = class ArtworkCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkCreateManyInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkCreateManyInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkCreateManyInput.prototype, "caption", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkCreateManyInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkCreateproductIdsInput_1.ArtworkCreateproductIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkCreateproductIdsInput_1.ArtworkCreateproductIdsInput)
], ArtworkCreateManyInput.prototype, "productIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkCreateManyInput.prototype, "inventoryId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ArtworkCreateManyInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ArtworkCreateManyInput.prototype, "updatedAt", void 0);
ArtworkCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ArtworkCreateManyInput", {
        isAbstract: true
    })
], ArtworkCreateManyInput);
exports.ArtworkCreateManyInput = ArtworkCreateManyInput;
