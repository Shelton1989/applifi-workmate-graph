"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtworkCreateManyInventoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkCreateproductIdsInput_1 = require("../inputs/ArtworkCreateproductIdsInput");
let ArtworkCreateManyInventoryInput = class ArtworkCreateManyInventoryInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkCreateManyInventoryInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkCreateManyInventoryInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkCreateManyInventoryInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkCreateManyInventoryInput.prototype, "caption", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkCreateManyInventoryInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkCreateproductIdsInput_1.ArtworkCreateproductIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkCreateproductIdsInput_1.ArtworkCreateproductIdsInput)
], ArtworkCreateManyInventoryInput.prototype, "productIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ArtworkCreateManyInventoryInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ArtworkCreateManyInventoryInput.prototype, "updatedAt", void 0);
ArtworkCreateManyInventoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ArtworkCreateManyInventoryInput", {
        isAbstract: true
    })
], ArtworkCreateManyInventoryInput);
exports.ArtworkCreateManyInventoryInput = ArtworkCreateManyInventoryInput;
