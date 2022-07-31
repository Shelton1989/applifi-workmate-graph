"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyNotificationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationUpdateManyMutationInput_1 = require("../../../inputs/NotificationUpdateManyMutationInput");
const NotificationWhereInput_1 = require("../../../inputs/NotificationWhereInput");
let UpdateManyNotificationArgs = class UpdateManyNotificationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationUpdateManyMutationInput_1.NotificationUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationUpdateManyMutationInput_1.NotificationUpdateManyMutationInput)
], UpdateManyNotificationArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationWhereInput_1.NotificationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationWhereInput_1.NotificationWhereInput)
], UpdateManyNotificationArgs.prototype, "where", void 0);
UpdateManyNotificationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyNotificationArgs);
exports.UpdateManyNotificationArgs = UpdateManyNotificationArgs;
