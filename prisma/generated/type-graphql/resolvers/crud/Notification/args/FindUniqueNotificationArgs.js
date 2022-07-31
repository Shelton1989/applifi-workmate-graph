"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueNotificationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationWhereUniqueInput_1 = require("../../../inputs/NotificationWhereUniqueInput");
let FindUniqueNotificationArgs = class FindUniqueNotificationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationWhereUniqueInput_1.NotificationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationWhereUniqueInput_1.NotificationWhereUniqueInput)
], FindUniqueNotificationArgs.prototype, "where", void 0);
FindUniqueNotificationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueNotificationArgs);
exports.FindUniqueNotificationArgs = FindUniqueNotificationArgs;
