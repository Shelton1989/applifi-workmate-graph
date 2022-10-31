"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EpisodeWhereInput_1 = require("../inputs/EpisodeWhereInput");
let EpisodeListRelationFilter = class EpisodeListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeWhereInput_1.EpisodeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeWhereInput_1.EpisodeWhereInput)
], EpisodeListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeWhereInput_1.EpisodeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeWhereInput_1.EpisodeWhereInput)
], EpisodeListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeWhereInput_1.EpisodeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeWhereInput_1.EpisodeWhereInput)
], EpisodeListRelationFilter.prototype, "none", void 0);
EpisodeListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EpisodeListRelationFilter", {
        isAbstract: true
    })
], EpisodeListRelationFilter);
exports.EpisodeListRelationFilter = EpisodeListRelationFilter;
