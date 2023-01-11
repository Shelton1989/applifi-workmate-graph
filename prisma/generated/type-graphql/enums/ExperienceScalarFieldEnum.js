"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ExperienceScalarFieldEnum;
(function (ExperienceScalarFieldEnum) {
    ExperienceScalarFieldEnum["id"] = "id";
    ExperienceScalarFieldEnum["tenantId"] = "tenantId";
    ExperienceScalarFieldEnum["productLink"] = "productLink";
    ExperienceScalarFieldEnum["stripeProductId"] = "stripeProductId";
    ExperienceScalarFieldEnum["title"] = "title";
    ExperienceScalarFieldEnum["description"] = "description";
    ExperienceScalarFieldEnum["category"] = "category";
    ExperienceScalarFieldEnum["photo"] = "photo";
    ExperienceScalarFieldEnum["gallery"] = "gallery";
    ExperienceScalarFieldEnum["location"] = "location";
    ExperienceScalarFieldEnum["duration"] = "duration";
    ExperienceScalarFieldEnum["publishStatus"] = "publishStatus";
    ExperienceScalarFieldEnum["likedByIds"] = "likedByIds";
    ExperienceScalarFieldEnum["createdAt"] = "createdAt";
    ExperienceScalarFieldEnum["updatedAt"] = "updatedAt";
})(ExperienceScalarFieldEnum = exports.ExperienceScalarFieldEnum || (exports.ExperienceScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ExperienceScalarFieldEnum, {
    name: "ExperienceScalarFieldEnum",
    description: undefined,
});
