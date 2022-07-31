"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutActivityInput_1 = require("../inputs/UserCreateNestedOneWithoutActivityInput");
let NotificationCreateWithoutUserInput = class NotificationCreateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationCreateWithoutUserInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], NotificationCreateWithoutUserInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutActivityInput_1.UserCreateNestedOneWithoutActivityInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutActivityInput_1.UserCreateNestedOneWithoutActivityInput)
], NotificationCreateWithoutUserInput.prototype, "Actor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationCreateWithoutUserInput.prototype, "entityId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], NotificationCreateWithoutUserInput.prototype, "hasBeenViewedBySubject", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], NotificationCreateWithoutUserInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], NotificationCreateWithoutUserInput.prototype, "updatedAt", void 0);
NotificationCreateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationCreateWithoutUserInput", {
        isAbstract: true
    })
], NotificationCreateWithoutUserInput);
exports.NotificationCreateWithoutUserInput = NotificationCreateWithoutUserInput;
