"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstArtworkArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkOrderByWithRelationInput_1 = require("../../../inputs/ArtworkOrderByWithRelationInput");
const ArtworkWhereInput_1 = require("../../../inputs/ArtworkWhereInput");
const ArtworkWhereUniqueInput_1 = require("../../../inputs/ArtworkWhereUniqueInput");
const ArtworkScalarFieldEnum_1 = require("../../../../enums/ArtworkScalarFieldEnum");
let FindFirstArtworkArgs = class FindFirstArtworkArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkWhereInput_1.ArtworkWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkWhereInput_1.ArtworkWhereInput)
], FindFirstArtworkArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ArtworkOrderByWithRelationInput_1.ArtworkOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstArtworkArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkWhereUniqueInput_1.ArtworkWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkWhereUniqueInput_1.ArtworkWhereUniqueInput)
], FindFirstArtworkArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstArtworkArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstArtworkArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ArtworkScalarFieldEnum_1.ArtworkScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstArtworkArgs.prototype, "distinct", void 0);
FindFirstArtworkArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstArtworkArgs);
exports.FindFirstArtworkArgs = FindFirstArtworkArgs;
