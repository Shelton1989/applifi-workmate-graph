"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationCreateOrConnectWithoutActorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationCreateWithoutActorInput_1 = require("../inputs/NotificationCreateWithoutActorInput");
const NotificationWhereUniqueInput_1 = require("../inputs/NotificationWhereUniqueInput");
let NotificationCreateOrConnectWithoutActorInput = class NotificationCreateOrConnectWithoutActorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationWhereUniqueInput_1.NotificationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationWhereUniqueInput_1.NotificationWhereUniqueInput)
], NotificationCreateOrConnectWithoutActorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationCreateWithoutActorInput_1.NotificationCreateWithoutActorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationCreateWithoutActorInput_1.NotificationCreateWithoutActorInput)
], NotificationCreateOrConnectWithoutActorInput.prototype, "create", void 0);
NotificationCreateOrConnectWithoutActorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationCreateOrConnectWithoutActorInput", {
        isAbstract: true
    })
], NotificationCreateOrConnectWithoutActorInput);
exports.NotificationCreateOrConnectWithoutActorInput = NotificationCreateOrConnectWithoutActorInput;
