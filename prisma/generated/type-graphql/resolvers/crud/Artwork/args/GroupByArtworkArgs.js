"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByArtworkArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkOrderByWithAggregationInput_1 = require("../../../inputs/ArtworkOrderByWithAggregationInput");
const ArtworkScalarWhereWithAggregatesInput_1 = require("../../../inputs/ArtworkScalarWhereWithAggregatesInput");
const ArtworkWhereInput_1 = require("../../../inputs/ArtworkWhereInput");
const ArtworkScalarFieldEnum_1 = require("../../../../enums/ArtworkScalarFieldEnum");
let GroupByArtworkArgs = class GroupByArtworkArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkWhereInput_1.ArtworkWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkWhereInput_1.ArtworkWhereInput)
], GroupByArtworkArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ArtworkOrderByWithAggregationInput_1.ArtworkOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByArtworkArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ArtworkScalarFieldEnum_1.ArtworkScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByArtworkArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkScalarWhereWithAggregatesInput_1.ArtworkScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkScalarWhereWithAggregatesInput_1.ArtworkScalarWhereWithAggregatesInput)
], GroupByArtworkArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByArtworkArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByArtworkArgs.prototype, "skip", void 0);
GroupByArtworkArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByArtworkArgs);
exports.GroupByArtworkArgs = GroupByArtworkArgs;
