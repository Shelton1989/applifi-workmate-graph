"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationCreateWithoutActorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutNotificationsInput_1 = require("../inputs/UserCreateNestedOneWithoutNotificationsInput");
let NotificationCreateWithoutActorInput = class NotificationCreateWithoutActorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationCreateWithoutActorInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], NotificationCreateWithoutActorInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutNotificationsInput_1.UserCreateNestedOneWithoutNotificationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutNotificationsInput_1.UserCreateNestedOneWithoutNotificationsInput)
], NotificationCreateWithoutActorInput.prototype, "User", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationCreateWithoutActorInput.prototype, "entityId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], NotificationCreateWithoutActorInput.prototype, "hasBeenViewedBySubject", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationCreateWithoutActorInput.prototype, "link", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationCreateWithoutActorInput.prototype, "mediaLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], NotificationCreateWithoutActorInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], NotificationCreateWithoutActorInput.prototype, "updatedAt", void 0);
NotificationCreateWithoutActorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationCreateWithoutActorInput", {
        isAbstract: true
    })
], NotificationCreateWithoutActorInput);
exports.NotificationCreateWithoutActorInput = NotificationCreateWithoutActorInput;
