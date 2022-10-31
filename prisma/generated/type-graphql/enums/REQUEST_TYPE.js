"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REQUEST_TYPE = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var REQUEST_TYPE;
(function (REQUEST_TYPE) {
    REQUEST_TYPE["POST_REVIEW"] = "POST_REVIEW";
    REQUEST_TYPE["COMMENT_REVIEW"] = "COMMENT_REVIEW";
    REQUEST_TYPE["PROFILE_REVIEW"] = "PROFILE_REVIEW";
    REQUEST_TYPE["ARTIST_ACCESS"] = "ARTIST_ACCESS";
    REQUEST_TYPE["HELP_REQUEST"] = "HELP_REQUEST";
})(REQUEST_TYPE = exports.REQUEST_TYPE || (exports.REQUEST_TYPE = {}));
TypeGraphQL.registerEnumType(REQUEST_TYPE, {
    name: "REQUEST_TYPE",
    description: undefined,
});
