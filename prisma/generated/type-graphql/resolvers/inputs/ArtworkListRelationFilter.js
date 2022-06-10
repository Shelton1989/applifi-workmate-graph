"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtworkListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkWhereInput_1 = require("../inputs/ArtworkWhereInput");
let ArtworkListRelationFilter = class ArtworkListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkWhereInput_1.ArtworkWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkWhereInput_1.ArtworkWhereInput)
], ArtworkListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkWhereInput_1.ArtworkWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkWhereInput_1.ArtworkWhereInput)
], ArtworkListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkWhereInput_1.ArtworkWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkWhereInput_1.ArtworkWhereInput)
], ArtworkListRelationFilter.prototype, "none", void 0);
ArtworkListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ArtworkListRelationFilter", {
        isAbstract: true
    })
], ArtworkListRelationFilter);
exports.ArtworkListRelationFilter = ArtworkListRelationFilter;
