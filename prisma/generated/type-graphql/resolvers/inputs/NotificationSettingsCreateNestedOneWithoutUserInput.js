"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationSettingsCreateNestedOneWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationSettingsCreateOrConnectWithoutUserInput_1 = require("../inputs/NotificationSettingsCreateOrConnectWithoutUserInput");
const NotificationSettingsCreateWithoutUserInput_1 = require("../inputs/NotificationSettingsCreateWithoutUserInput");
const NotificationSettingsWhereUniqueInput_1 = require("../inputs/NotificationSettingsWhereUniqueInput");
let NotificationSettingsCreateNestedOneWithoutUserInput = class NotificationSettingsCreateNestedOneWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationSettingsCreateWithoutUserInput_1.NotificationSettingsCreateWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationSettingsCreateWithoutUserInput_1.NotificationSettingsCreateWithoutUserInput)
], NotificationSettingsCreateNestedOneWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationSettingsCreateOrConnectWithoutUserInput_1.NotificationSettingsCreateOrConnectWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationSettingsCreateOrConnectWithoutUserInput_1.NotificationSettingsCreateOrConnectWithoutUserInput)
], NotificationSettingsCreateNestedOneWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationSettingsWhereUniqueInput_1.NotificationSettingsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationSettingsWhereUniqueInput_1.NotificationSettingsWhereUniqueInput)
], NotificationSettingsCreateNestedOneWithoutUserInput.prototype, "connect", void 0);
NotificationSettingsCreateNestedOneWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationSettingsCreateNestedOneWithoutUserInput", {
        isAbstract: true
    })
], NotificationSettingsCreateNestedOneWithoutUserInput);
exports.NotificationSettingsCreateNestedOneWithoutUserInput = NotificationSettingsCreateNestedOneWithoutUserInput;
