"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationCreateWithoutUserInput_1 = require("../inputs/NotificationCreateWithoutUserInput");
const NotificationWhereUniqueInput_1 = require("../inputs/NotificationWhereUniqueInput");
let NotificationCreateOrConnectWithoutUserInput = class NotificationCreateOrConnectWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationWhereUniqueInput_1.NotificationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationWhereUniqueInput_1.NotificationWhereUniqueInput)
], NotificationCreateOrConnectWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationCreateWithoutUserInput_1.NotificationCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationCreateWithoutUserInput_1.NotificationCreateWithoutUserInput)
], NotificationCreateOrConnectWithoutUserInput.prototype, "create", void 0);
NotificationCreateOrConnectWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationCreateOrConnectWithoutUserInput", {
        isAbstract: true
    })
], NotificationCreateOrConnectWithoutUserInput);
exports.NotificationCreateOrConnectWithoutUserInput = NotificationCreateOrConnectWithoutUserInput;
