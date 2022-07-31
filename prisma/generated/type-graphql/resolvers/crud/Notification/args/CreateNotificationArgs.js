"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNotificationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationCreateInput_1 = require("../../../inputs/NotificationCreateInput");
let CreateNotificationArgs = class CreateNotificationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationCreateInput_1.NotificationCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationCreateInput_1.NotificationCreateInput)
], CreateNotificationArgs.prototype, "data", void 0);
CreateNotificationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateNotificationArgs);
exports.CreateNotificationArgs = CreateNotificationArgs;
