"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var EpisodeScalarFieldEnum;
(function (EpisodeScalarFieldEnum) {
    EpisodeScalarFieldEnum["id"] = "id";
    EpisodeScalarFieldEnum["episodeNumber"] = "episodeNumber";
    EpisodeScalarFieldEnum["title"] = "title";
    EpisodeScalarFieldEnum["year"] = "year";
    EpisodeScalarFieldEnum["poster"] = "poster";
    EpisodeScalarFieldEnum["overview"] = "overview";
    EpisodeScalarFieldEnum["trailer"] = "trailer";
    EpisodeScalarFieldEnum["coverImage"] = "coverImage";
    EpisodeScalarFieldEnum["tagline"] = "tagline";
    EpisodeScalarFieldEnum["seasonSeriesId"] = "seasonSeriesId";
    EpisodeScalarFieldEnum["createdAt"] = "createdAt";
    EpisodeScalarFieldEnum["updatedAt"] = "updatedAt";
})(EpisodeScalarFieldEnum = exports.EpisodeScalarFieldEnum || (exports.EpisodeScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(EpisodeScalarFieldEnum, {
    name: "EpisodeScalarFieldEnum",
    description: undefined,
});
