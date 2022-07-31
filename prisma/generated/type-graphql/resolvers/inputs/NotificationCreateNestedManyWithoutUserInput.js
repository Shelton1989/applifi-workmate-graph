"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationCreateNestedManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationCreateManyUserInputEnvelope_1 = require("../inputs/NotificationCreateManyUserInputEnvelope");
const NotificationCreateOrConnectWithoutUserInput_1 = require("../inputs/NotificationCreateOrConnectWithoutUserInput");
const NotificationCreateWithoutUserInput_1 = require("../inputs/NotificationCreateWithoutUserInput");
const NotificationWhereUniqueInput_1 = require("../inputs/NotificationWhereUniqueInput");
let NotificationCreateNestedManyWithoutUserInput = class NotificationCreateNestedManyWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationCreateWithoutUserInput_1.NotificationCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationCreateNestedManyWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationCreateOrConnectWithoutUserInput_1.NotificationCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationCreateNestedManyWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationCreateManyUserInputEnvelope_1.NotificationCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationCreateManyUserInputEnvelope_1.NotificationCreateManyUserInputEnvelope)
], NotificationCreateNestedManyWithoutUserInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationWhereUniqueInput_1.NotificationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationCreateNestedManyWithoutUserInput.prototype, "connect", void 0);
NotificationCreateNestedManyWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationCreateNestedManyWithoutUserInput", {
        isAbstract: true
    })
], NotificationCreateNestedManyWithoutUserInput);
exports.NotificationCreateNestedManyWithoutUserInput = NotificationCreateNestedManyWithoutUserInput;
