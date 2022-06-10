"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SIZE_REGION = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var SIZE_REGION;
(function (SIZE_REGION) {
    SIZE_REGION["US"] = "US";
    SIZE_REGION["UK"] = "UK";
    SIZE_REGION["EU"] = "EU";
    SIZE_REGION["UNIVERSAL"] = "UNIVERSAL";
})(SIZE_REGION = exports.SIZE_REGION || (exports.SIZE_REGION = {}));
TypeGraphQL.registerEnumType(SIZE_REGION, {
    name: "SIZE_REGION",
    description: undefined,
});
