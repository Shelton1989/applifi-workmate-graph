"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutActivityInput_1 = require("../inputs/UserCreateNestedOneWithoutActivityInput");
const UserCreateNestedOneWithoutNotificationsInput_1 = require("../inputs/UserCreateNestedOneWithoutNotificationsInput");
let NotificationCreateInput = class NotificationCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], NotificationCreateInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutNotificationsInput_1.UserCreateNestedOneWithoutNotificationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutNotificationsInput_1.UserCreateNestedOneWithoutNotificationsInput)
], NotificationCreateInput.prototype, "User", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutActivityInput_1.UserCreateNestedOneWithoutActivityInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutActivityInput_1.UserCreateNestedOneWithoutActivityInput)
], NotificationCreateInput.prototype, "Actor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationCreateInput.prototype, "entityId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], NotificationCreateInput.prototype, "hasBeenViewedBySubject", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], NotificationCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], NotificationCreateInput.prototype, "updatedAt", void 0);
NotificationCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationCreateInput", {
        isAbstract: true
    })
], NotificationCreateInput);
exports.NotificationCreateInput = NotificationCreateInput;
