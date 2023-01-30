"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeaturesScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var FeaturesScalarFieldEnum;
(function (FeaturesScalarFieldEnum) {
    FeaturesScalarFieldEnum["id"] = "id";
    FeaturesScalarFieldEnum["experienceId"] = "experienceId";
    FeaturesScalarFieldEnum["title"] = "title";
    FeaturesScalarFieldEnum["shortDescription"] = "shortDescription";
    FeaturesScalarFieldEnum["createdAt"] = "createdAt";
    FeaturesScalarFieldEnum["updatedAt"] = "updatedAt";
})(FeaturesScalarFieldEnum = exports.FeaturesScalarFieldEnum || (exports.FeaturesScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(FeaturesScalarFieldEnum, {
    name: "FeaturesScalarFieldEnum",
    description: undefined,
});
