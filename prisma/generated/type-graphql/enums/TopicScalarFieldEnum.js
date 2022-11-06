"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var TopicScalarFieldEnum;
(function (TopicScalarFieldEnum) {
    TopicScalarFieldEnum["id"] = "id";
    TopicScalarFieldEnum["title"] = "title";
    TopicScalarFieldEnum["year"] = "year";
    TopicScalarFieldEnum["poster"] = "poster";
    TopicScalarFieldEnum["overview"] = "overview";
    TopicScalarFieldEnum["trailer"] = "trailer";
    TopicScalarFieldEnum["coverImage"] = "coverImage";
    TopicScalarFieldEnum["tagline"] = "tagline";
    TopicScalarFieldEnum["genres"] = "genres";
    TopicScalarFieldEnum["creators"] = "creators";
    TopicScalarFieldEnum["authors"] = "authors";
    TopicScalarFieldEnum["artists"] = "artists";
    TopicScalarFieldEnum["producers"] = "producers";
    TopicScalarFieldEnum["directors"] = "directors";
    TopicScalarFieldEnum["publishers"] = "publishers";
    TopicScalarFieldEnum["cast"] = "cast";
    TopicScalarFieldEnum["type"] = "type";
    TopicScalarFieldEnum["releaseDate"] = "releaseDate";
    TopicScalarFieldEnum["topicType"] = "topicType";
    TopicScalarFieldEnum["createdAt"] = "createdAt";
    TopicScalarFieldEnum["updatedAt"] = "updatedAt";
})(TopicScalarFieldEnum = exports.TopicScalarFieldEnum || (exports.TopicScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(TopicScalarFieldEnum, {
    name: "TopicScalarFieldEnum",
    description: undefined,
});
