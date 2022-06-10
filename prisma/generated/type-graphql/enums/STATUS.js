"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STATUS = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var STATUS;
(function (STATUS) {
    STATUS["PENDING_APPROVAL"] = "PENDING_APPROVAL";
    STATUS["IN_REVIEW"] = "IN_REVIEW";
    STATUS["APPROVED"] = "APPROVED";
    STATUS["NO_ACTION_TAKEN"] = "NO_ACTION_TAKEN";
    STATUS["REJECTED_WITH_REASON"] = "REJECTED_WITH_REASON";
    STATUS["DECLINED"] = "DECLINED";
    STATUS["BANNED"] = "BANNED";
    STATUS["SOFT_BANNED"] = "SOFT_BANNED";
})(STATUS = exports.STATUS || (exports.STATUS = {}));
TypeGraphQL.registerEnumType(STATUS, {
    name: "STATUS",
    description: undefined,
});
