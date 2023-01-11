"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PUBLISH_STATUS = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var PUBLISH_STATUS;
(function (PUBLISH_STATUS) {
    PUBLISH_STATUS["DRAFT"] = "DRAFT";
    PUBLISH_STATUS["PUBLISHED"] = "PUBLISHED";
    PUBLISH_STATUS["UNPUBLISHED"] = "UNPUBLISHED";
    PUBLISH_STATUS["UNDER_REVIEW"] = "UNDER_REVIEW";
    PUBLISH_STATUS["PENDING_APPROVAL"] = "PENDING_APPROVAL";
    PUBLISH_STATUS["IN_REVIEW"] = "IN_REVIEW";
    PUBLISH_STATUS["APPROVED"] = "APPROVED";
    PUBLISH_STATUS["NO_ACTION_TAKEN"] = "NO_ACTION_TAKEN";
    PUBLISH_STATUS["REJECTED_WITH_REASON"] = "REJECTED_WITH_REASON";
    PUBLISH_STATUS["DECLINED"] = "DECLINED";
    PUBLISH_STATUS["BANNED"] = "BANNED";
    PUBLISH_STATUS["SOFT_BANNED"] = "SOFT_BANNED";
})(PUBLISH_STATUS = exports.PUBLISH_STATUS || (exports.PUBLISH_STATUS = {}));
TypeGraphQL.registerEnumType(PUBLISH_STATUS, {
    name: "PUBLISH_STATUS",
    description: undefined,
});
