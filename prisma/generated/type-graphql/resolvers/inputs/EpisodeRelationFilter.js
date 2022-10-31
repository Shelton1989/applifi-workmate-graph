"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EpisodeWhereInput_1 = require("../inputs/EpisodeWhereInput");
let EpisodeRelationFilter = class EpisodeRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeWhereInput_1.EpisodeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeWhereInput_1.EpisodeWhereInput)
], EpisodeRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeWhereInput_1.EpisodeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeWhereInput_1.EpisodeWhereInput)
], EpisodeRelationFilter.prototype, "isNot", void 0);
EpisodeRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EpisodeRelationFilter", {
        isAbstract: true
    })
], EpisodeRelationFilter);
exports.EpisodeRelationFilter = EpisodeRelationFilter;
