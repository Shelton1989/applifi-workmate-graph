"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationUpsertWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationCreateWithoutUserInput_1 = require("../inputs/NotificationCreateWithoutUserInput");
const NotificationUpdateWithoutUserInput_1 = require("../inputs/NotificationUpdateWithoutUserInput");
const NotificationWhereUniqueInput_1 = require("../inputs/NotificationWhereUniqueInput");
let NotificationUpsertWithWhereUniqueWithoutUserInput = class NotificationUpsertWithWhereUniqueWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationWhereUniqueInput_1.NotificationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationWhereUniqueInput_1.NotificationWhereUniqueInput)
], NotificationUpsertWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationUpdateWithoutUserInput_1.NotificationUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationUpdateWithoutUserInput_1.NotificationUpdateWithoutUserInput)
], NotificationUpsertWithWhereUniqueWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationCreateWithoutUserInput_1.NotificationCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationCreateWithoutUserInput_1.NotificationCreateWithoutUserInput)
], NotificationUpsertWithWhereUniqueWithoutUserInput.prototype, "create", void 0);
NotificationUpsertWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationUpsertWithWhereUniqueWithoutUserInput", {
        isAbstract: true
    })
], NotificationUpsertWithWhereUniqueWithoutUserInput);
exports.NotificationUpsertWithWhereUniqueWithoutUserInput = NotificationUpsertWithWhereUniqueWithoutUserInput;
