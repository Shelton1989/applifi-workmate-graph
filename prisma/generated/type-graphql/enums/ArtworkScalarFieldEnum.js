"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtworkScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ArtworkScalarFieldEnum;
(function (ArtworkScalarFieldEnum) {
    ArtworkScalarFieldEnum["id"] = "id";
    ArtworkScalarFieldEnum["title"] = "title";
    ArtworkScalarFieldEnum["description"] = "description";
    ArtworkScalarFieldEnum["caption"] = "caption";
    ArtworkScalarFieldEnum["url"] = "url";
    ArtworkScalarFieldEnum["productIds"] = "productIds";
    ArtworkScalarFieldEnum["inventoryId"] = "inventoryId";
    ArtworkScalarFieldEnum["createdAt"] = "createdAt";
    ArtworkScalarFieldEnum["updatedAt"] = "updatedAt";
})(ArtworkScalarFieldEnum = exports.ArtworkScalarFieldEnum || (exports.ArtworkScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ArtworkScalarFieldEnum, {
    name: "ArtworkScalarFieldEnum",
    description: undefined,
});
