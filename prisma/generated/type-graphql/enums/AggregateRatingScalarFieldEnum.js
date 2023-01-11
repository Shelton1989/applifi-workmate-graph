"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRatingScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var AggregateRatingScalarFieldEnum;
(function (AggregateRatingScalarFieldEnum) {
    AggregateRatingScalarFieldEnum["id"] = "id";
    AggregateRatingScalarFieldEnum["ratingValue"] = "ratingValue";
    AggregateRatingScalarFieldEnum["countedPosts"] = "countedPosts";
    AggregateRatingScalarFieldEnum["allPosts"] = "allPosts";
    AggregateRatingScalarFieldEnum["ratingCount"] = "ratingCount";
    AggregateRatingScalarFieldEnum["experienceId"] = "experienceId";
    AggregateRatingScalarFieldEnum["createdAt"] = "createdAt";
    AggregateRatingScalarFieldEnum["updatedAt"] = "updatedAt";
})(AggregateRatingScalarFieldEnum = exports.AggregateRatingScalarFieldEnum || (exports.AggregateRatingScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(AggregateRatingScalarFieldEnum, {
    name: "AggregateRatingScalarFieldEnum",
    description: undefined,
});
