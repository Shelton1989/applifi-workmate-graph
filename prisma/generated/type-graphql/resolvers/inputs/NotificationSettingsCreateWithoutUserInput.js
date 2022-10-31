"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationSettingsCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let NotificationSettingsCreateWithoutUserInput = class NotificationSettingsCreateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationSettingsCreateWithoutUserInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], NotificationSettingsCreateWithoutUserInput.prototype, "newContentILike", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], NotificationSettingsCreateWithoutUserInput.prototype, "commentsOnMyReviews", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], NotificationSettingsCreateWithoutUserInput.prototype, "repliesToMyComments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], NotificationSettingsCreateWithoutUserInput.prototype, "repliesToThreads", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], NotificationSettingsCreateWithoutUserInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], NotificationSettingsCreateWithoutUserInput.prototype, "updatedAt", void 0);
NotificationSettingsCreateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationSettingsCreateWithoutUserInput", {
        isAbstract: true
    })
], NotificationSettingsCreateWithoutUserInput);
exports.NotificationSettingsCreateWithoutUserInput = NotificationSettingsCreateWithoutUserInput;
