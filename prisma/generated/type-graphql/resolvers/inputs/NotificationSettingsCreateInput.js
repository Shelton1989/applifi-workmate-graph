"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationSettingsCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutNotificationSettingsInput_1 = require("../inputs/UserCreateNestedOneWithoutNotificationSettingsInput");
let NotificationSettingsCreateInput = class NotificationSettingsCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationSettingsCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], NotificationSettingsCreateInput.prototype, "newDocumentsIndexed", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], NotificationSettingsCreateInput.prototype, "documentUpdates", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], NotificationSettingsCreateInput.prototype, "newRequests", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], NotificationSettingsCreateInput.prototype, "requestUpdates", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], NotificationSettingsCreateInput.prototype, "commentsOnMyReviews", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], NotificationSettingsCreateInput.prototype, "repliesToMyReviews", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutNotificationSettingsInput_1.UserCreateNestedOneWithoutNotificationSettingsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutNotificationSettingsInput_1.UserCreateNestedOneWithoutNotificationSettingsInput)
], NotificationSettingsCreateInput.prototype, "User", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], NotificationSettingsCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], NotificationSettingsCreateInput.prototype, "updatedAt", void 0);
NotificationSettingsCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationSettingsCreateInput", {
        isAbstract: true
    })
], NotificationSettingsCreateInput);
exports.NotificationSettingsCreateInput = NotificationSettingsCreateInput;
