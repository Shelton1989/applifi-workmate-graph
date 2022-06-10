"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationSettingsUpdateOneWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationSettingsCreateOrConnectWithoutUserInput_1 = require("../inputs/NotificationSettingsCreateOrConnectWithoutUserInput");
const NotificationSettingsCreateWithoutUserInput_1 = require("../inputs/NotificationSettingsCreateWithoutUserInput");
const NotificationSettingsUpdateWithoutUserInput_1 = require("../inputs/NotificationSettingsUpdateWithoutUserInput");
const NotificationSettingsUpsertWithoutUserInput_1 = require("../inputs/NotificationSettingsUpsertWithoutUserInput");
const NotificationSettingsWhereUniqueInput_1 = require("../inputs/NotificationSettingsWhereUniqueInput");
let NotificationSettingsUpdateOneWithoutUserInput = class NotificationSettingsUpdateOneWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationSettingsCreateWithoutUserInput_1.NotificationSettingsCreateWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationSettingsCreateWithoutUserInput_1.NotificationSettingsCreateWithoutUserInput)
], NotificationSettingsUpdateOneWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationSettingsCreateOrConnectWithoutUserInput_1.NotificationSettingsCreateOrConnectWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationSettingsCreateOrConnectWithoutUserInput_1.NotificationSettingsCreateOrConnectWithoutUserInput)
], NotificationSettingsUpdateOneWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationSettingsUpsertWithoutUserInput_1.NotificationSettingsUpsertWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationSettingsUpsertWithoutUserInput_1.NotificationSettingsUpsertWithoutUserInput)
], NotificationSettingsUpdateOneWithoutUserInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], NotificationSettingsUpdateOneWithoutUserInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], NotificationSettingsUpdateOneWithoutUserInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationSettingsWhereUniqueInput_1.NotificationSettingsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationSettingsWhereUniqueInput_1.NotificationSettingsWhereUniqueInput)
], NotificationSettingsUpdateOneWithoutUserInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationSettingsUpdateWithoutUserInput_1.NotificationSettingsUpdateWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationSettingsUpdateWithoutUserInput_1.NotificationSettingsUpdateWithoutUserInput)
], NotificationSettingsUpdateOneWithoutUserInput.prototype, "update", void 0);
NotificationSettingsUpdateOneWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationSettingsUpdateOneWithoutUserInput", {
        isAbstract: true
    })
], NotificationSettingsUpdateOneWithoutUserInput);
exports.NotificationSettingsUpdateOneWithoutUserInput = NotificationSettingsUpdateOneWithoutUserInput;
