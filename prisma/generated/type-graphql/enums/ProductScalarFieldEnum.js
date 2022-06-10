"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ProductScalarFieldEnum;
(function (ProductScalarFieldEnum) {
    ProductScalarFieldEnum["id"] = "id";
    ProductScalarFieldEnum["description"] = "description";
    ProductScalarFieldEnum["priceId"] = "priceId";
    ProductScalarFieldEnum["availableQuantity"] = "availableQuantity";
    ProductScalarFieldEnum["photo"] = "photo";
    ProductScalarFieldEnum["gallery"] = "gallery";
    ProductScalarFieldEnum["baseProductId"] = "baseProductId";
    ProductScalarFieldEnum["artworkIds"] = "artworkIds";
    ProductScalarFieldEnum["colorIds"] = "colorIds";
    ProductScalarFieldEnum["sizeIds"] = "sizeIds";
    ProductScalarFieldEnum["likedByIds"] = "likedByIds";
    ProductScalarFieldEnum["inventoryId"] = "inventoryId";
    ProductScalarFieldEnum["createdAt"] = "createdAt";
    ProductScalarFieldEnum["updatedAt"] = "updatedAt";
})(ProductScalarFieldEnum = exports.ProductScalarFieldEnum || (exports.ProductScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ProductScalarFieldEnum, {
    name: "ProductScalarFieldEnum",
    description: undefined,
});
