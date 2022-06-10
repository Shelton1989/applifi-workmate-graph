"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtworkCreateproductIdsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ArtworkCreateproductIdsInput = class ArtworkCreateproductIdsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ArtworkCreateproductIdsInput.prototype, "set", void 0);
ArtworkCreateproductIdsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ArtworkCreateproductIdsInput", {
        isAbstract: true
    })
], ArtworkCreateproductIdsInput);
exports.ArtworkCreateproductIdsInput = ArtworkCreateproductIdsInput;
