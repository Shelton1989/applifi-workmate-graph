"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationSettingsWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let NotificationSettingsWhereUniqueInput = class NotificationSettingsWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationSettingsWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationSettingsWhereUniqueInput.prototype, "userId", void 0);
NotificationSettingsWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationSettingsWhereUniqueInput", {
        isAbstract: true
    })
], NotificationSettingsWhereUniqueInput);
exports.NotificationSettingsWhereUniqueInput = NotificationSettingsWhereUniqueInput;
