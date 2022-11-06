"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonSeriesScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var SeasonSeriesScalarFieldEnum;
(function (SeasonSeriesScalarFieldEnum) {
    SeasonSeriesScalarFieldEnum["id"] = "id";
    SeasonSeriesScalarFieldEnum["seasonOrSeriesNumber"] = "seasonOrSeriesNumber";
    SeasonSeriesScalarFieldEnum["title"] = "title";
    SeasonSeriesScalarFieldEnum["year"] = "year";
    SeasonSeriesScalarFieldEnum["poster"] = "poster";
    SeasonSeriesScalarFieldEnum["overview"] = "overview";
    SeasonSeriesScalarFieldEnum["trailer"] = "trailer";
    SeasonSeriesScalarFieldEnum["coverImage"] = "coverImage";
    SeasonSeriesScalarFieldEnum["tagline"] = "tagline";
    SeasonSeriesScalarFieldEnum["releaseDate"] = "releaseDate";
    SeasonSeriesScalarFieldEnum["topicId"] = "topicId";
    SeasonSeriesScalarFieldEnum["createdAt"] = "createdAt";
    SeasonSeriesScalarFieldEnum["updatedAt"] = "updatedAt";
})(SeasonSeriesScalarFieldEnum = exports.SeasonSeriesScalarFieldEnum || (exports.SeasonSeriesScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(SeasonSeriesScalarFieldEnum, {
    name: "SeasonSeriesScalarFieldEnum",
    description: undefined,
});
