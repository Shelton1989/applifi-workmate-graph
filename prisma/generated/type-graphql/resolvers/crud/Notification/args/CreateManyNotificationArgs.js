"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyNotificationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationCreateManyInput_1 = require("../../../inputs/NotificationCreateManyInput");
let CreateManyNotificationArgs = class CreateManyNotificationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationCreateManyInput_1.NotificationCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyNotificationArgs.prototype, "data", void 0);
CreateManyNotificationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyNotificationArgs);
exports.CreateManyNotificationArgs = CreateManyNotificationArgs;
