"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNotificationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationUpdateInput_1 = require("../../../inputs/NotificationUpdateInput");
const NotificationWhereUniqueInput_1 = require("../../../inputs/NotificationWhereUniqueInput");
let UpdateNotificationArgs = class UpdateNotificationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationUpdateInput_1.NotificationUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationUpdateInput_1.NotificationUpdateInput)
], UpdateNotificationArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationWhereUniqueInput_1.NotificationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationWhereUniqueInput_1.NotificationWhereUniqueInput)
], UpdateNotificationArgs.prototype, "where", void 0);
UpdateNotificationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateNotificationArgs);
exports.UpdateNotificationArgs = UpdateNotificationArgs;
