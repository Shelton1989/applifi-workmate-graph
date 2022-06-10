"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MEDIA_TYPE = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var MEDIA_TYPE;
(function (MEDIA_TYPE) {
    MEDIA_TYPE["SHORT_VIDEO"] = "SHORT_VIDEO";
    MEDIA_TYPE["IMAGE"] = "IMAGE";
    MEDIA_TYPE["CAROUSEL"] = "CAROUSEL";
})(MEDIA_TYPE = exports.MEDIA_TYPE || (exports.MEDIA_TYPE = {}));
TypeGraphQL.registerEnumType(MEDIA_TYPE, {
    name: "MEDIA_TYPE",
    description: undefined,
});
