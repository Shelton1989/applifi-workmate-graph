"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationSettingsCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationSettingsCreateWithoutUserInput_1 = require("../inputs/NotificationSettingsCreateWithoutUserInput");
const NotificationSettingsWhereUniqueInput_1 = require("../inputs/NotificationSettingsWhereUniqueInput");
let NotificationSettingsCreateOrConnectWithoutUserInput = class NotificationSettingsCreateOrConnectWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationSettingsWhereUniqueInput_1.NotificationSettingsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationSettingsWhereUniqueInput_1.NotificationSettingsWhereUniqueInput)
], NotificationSettingsCreateOrConnectWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationSettingsCreateWithoutUserInput_1.NotificationSettingsCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationSettingsCreateWithoutUserInput_1.NotificationSettingsCreateWithoutUserInput)
], NotificationSettingsCreateOrConnectWithoutUserInput.prototype, "create", void 0);
NotificationSettingsCreateOrConnectWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationSettingsCreateOrConnectWithoutUserInput", {
        isAbstract: true
    })
], NotificationSettingsCreateOrConnectWithoutUserInput);
exports.NotificationSettingsCreateOrConnectWithoutUserInput = NotificationSettingsCreateOrConnectWithoutUserInput;
