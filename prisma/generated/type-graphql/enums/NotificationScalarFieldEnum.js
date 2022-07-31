"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var NotificationScalarFieldEnum;
(function (NotificationScalarFieldEnum) {
    NotificationScalarFieldEnum["id"] = "id";
    NotificationScalarFieldEnum["description"] = "description";
    NotificationScalarFieldEnum["userId"] = "userId";
    NotificationScalarFieldEnum["actorId"] = "actorId";
    NotificationScalarFieldEnum["entityId"] = "entityId";
    NotificationScalarFieldEnum["hasBeenViewedBySubject"] = "hasBeenViewedBySubject";
    NotificationScalarFieldEnum["createdAt"] = "createdAt";
    NotificationScalarFieldEnum["updatedAt"] = "updatedAt";
})(NotificationScalarFieldEnum = exports.NotificationScalarFieldEnum || (exports.NotificationScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(NotificationScalarFieldEnum, {
    name: "NotificationScalarFieldEnum",
    description: undefined,
});
