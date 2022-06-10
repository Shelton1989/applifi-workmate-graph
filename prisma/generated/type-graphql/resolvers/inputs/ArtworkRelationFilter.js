"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtworkRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkWhereInput_1 = require("../inputs/ArtworkWhereInput");
let ArtworkRelationFilter = class ArtworkRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkWhereInput_1.ArtworkWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkWhereInput_1.ArtworkWhereInput)
], ArtworkRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkWhereInput_1.ArtworkWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkWhereInput_1.ArtworkWhereInput)
], ArtworkRelationFilter.prototype, "isNot", void 0);
ArtworkRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ArtworkRelationFilter", {
        isAbstract: true
    })
], ArtworkRelationFilter);
exports.ArtworkRelationFilter = ArtworkRelationFilter;
