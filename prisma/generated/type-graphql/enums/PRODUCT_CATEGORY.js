"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PRODUCT_CATEGORY = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var PRODUCT_CATEGORY;
(function (PRODUCT_CATEGORY) {
    PRODUCT_CATEGORY["MEN"] = "MEN";
    PRODUCT_CATEGORY["WOMEN"] = "WOMEN";
    PRODUCT_CATEGORY["CHILDREN"] = "CHILDREN";
    PRODUCT_CATEGORY["ANY"] = "ANY";
})(PRODUCT_CATEGORY = exports.PRODUCT_CATEGORY || (exports.PRODUCT_CATEGORY = {}));
TypeGraphQL.registerEnumType(PRODUCT_CATEGORY, {
    name: "PRODUCT_CATEGORY",
    description: undefined,
});
