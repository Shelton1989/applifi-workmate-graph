"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PRODUCT_TYPE = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var PRODUCT_TYPE;
(function (PRODUCT_TYPE) {
    PRODUCT_TYPE["SNEAKER"] = "SNEAKER";
    PRODUCT_TYPE["TSHIRT"] = "TSHIRT";
    PRODUCT_TYPE["CREWNECK"] = "CREWNECK";
    PRODUCT_TYPE["JEANS"] = "JEANS";
    PRODUCT_TYPE["JOGGER"] = "JOGGER";
    PRODUCT_TYPE["FITTED"] = "FITTED";
})(PRODUCT_TYPE = exports.PRODUCT_TYPE || (exports.PRODUCT_TYPE = {}));
TypeGraphQL.registerEnumType(PRODUCT_TYPE, {
    name: "PRODUCT_TYPE",
    description: undefined,
});
