"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateArtworkArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkOrderByWithRelationInput_1 = require("../../../inputs/ArtworkOrderByWithRelationInput");
const ArtworkWhereInput_1 = require("../../../inputs/ArtworkWhereInput");
const ArtworkWhereUniqueInput_1 = require("../../../inputs/ArtworkWhereUniqueInput");
let AggregateArtworkArgs = class AggregateArtworkArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkWhereInput_1.ArtworkWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkWhereInput_1.ArtworkWhereInput)
], AggregateArtworkArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ArtworkOrderByWithRelationInput_1.ArtworkOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateArtworkArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkWhereUniqueInput_1.ArtworkWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkWhereUniqueInput_1.ArtworkWhereUniqueInput)
], AggregateArtworkArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateArtworkArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateArtworkArgs.prototype, "skip", void 0);
AggregateArtworkArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateArtworkArgs);
exports.AggregateArtworkArgs = AggregateArtworkArgs;
