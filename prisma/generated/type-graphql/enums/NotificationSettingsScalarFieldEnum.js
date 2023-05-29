"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationSettingsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var NotificationSettingsScalarFieldEnum;
(function (NotificationSettingsScalarFieldEnum) {
    NotificationSettingsScalarFieldEnum["id"] = "id";
    NotificationSettingsScalarFieldEnum["newDocumentsIndexed"] = "newDocumentsIndexed";
    NotificationSettingsScalarFieldEnum["documentUpdates"] = "documentUpdates";
    NotificationSettingsScalarFieldEnum["newRequests"] = "newRequests";
    NotificationSettingsScalarFieldEnum["requestUpdates"] = "requestUpdates";
    NotificationSettingsScalarFieldEnum["commentsOnMyReviews"] = "commentsOnMyReviews";
    NotificationSettingsScalarFieldEnum["repliesToMyReviews"] = "repliesToMyReviews";
    NotificationSettingsScalarFieldEnum["userId"] = "userId";
    NotificationSettingsScalarFieldEnum["createdAt"] = "createdAt";
    NotificationSettingsScalarFieldEnum["updatedAt"] = "updatedAt";
})(NotificationSettingsScalarFieldEnum = exports.NotificationSettingsScalarFieldEnum || (exports.NotificationSettingsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(NotificationSettingsScalarFieldEnum, {
    name: "NotificationSettingsScalarFieldEnum",
    description: undefined,
});
