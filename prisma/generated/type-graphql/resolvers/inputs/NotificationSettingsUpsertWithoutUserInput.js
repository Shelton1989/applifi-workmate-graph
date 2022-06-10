"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationSettingsUpsertWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationSettingsCreateWithoutUserInput_1 = require("../inputs/NotificationSettingsCreateWithoutUserInput");
const NotificationSettingsUpdateWithoutUserInput_1 = require("../inputs/NotificationSettingsUpdateWithoutUserInput");
let NotificationSettingsUpsertWithoutUserInput = class NotificationSettingsUpsertWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationSettingsUpdateWithoutUserInput_1.NotificationSettingsUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationSettingsUpdateWithoutUserInput_1.NotificationSettingsUpdateWithoutUserInput)
], NotificationSettingsUpsertWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationSettingsCreateWithoutUserInput_1.NotificationSettingsCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationSettingsCreateWithoutUserInput_1.NotificationSettingsCreateWithoutUserInput)
], NotificationSettingsUpsertWithoutUserInput.prototype, "create", void 0);
NotificationSettingsUpsertWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationSettingsUpsertWithoutUserInput", {
        isAbstract: true
    })
], NotificationSettingsUpsertWithoutUserInput);
exports.NotificationSettingsUpsertWithoutUserInput = NotificationSettingsUpsertWithoutUserInput;
