"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var LocationScalarFieldEnum;
(function (LocationScalarFieldEnum) {
    LocationScalarFieldEnum["id"] = "id";
    LocationScalarFieldEnum["longitude"] = "longitude";
    LocationScalarFieldEnum["latitude"] = "latitude";
    LocationScalarFieldEnum["googleMapsUrl"] = "googleMapsUrl";
    LocationScalarFieldEnum["googlePlacesId"] = "googlePlacesId";
    LocationScalarFieldEnum["type"] = "type";
    LocationScalarFieldEnum["line1"] = "line1";
    LocationScalarFieldEnum["line2"] = "line2";
    LocationScalarFieldEnum["city"] = "city";
    LocationScalarFieldEnum["district"] = "district";
    LocationScalarFieldEnum["country"] = "country";
    LocationScalarFieldEnum["code"] = "code";
    LocationScalarFieldEnum["isDefault"] = "isDefault";
    LocationScalarFieldEnum["experienceId"] = "experienceId";
    LocationScalarFieldEnum["tenantId"] = "tenantId";
    LocationScalarFieldEnum["createdAt"] = "createdAt";
    LocationScalarFieldEnum["updatedAt"] = "updatedAt";
})(LocationScalarFieldEnum = exports.LocationScalarFieldEnum || (exports.LocationScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(LocationScalarFieldEnum, {
    name: "LocationScalarFieldEnum",
    description: undefined,
});
