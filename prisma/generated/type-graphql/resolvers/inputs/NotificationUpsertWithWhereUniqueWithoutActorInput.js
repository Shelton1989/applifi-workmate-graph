"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationUpsertWithWhereUniqueWithoutActorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationCreateWithoutActorInput_1 = require("../inputs/NotificationCreateWithoutActorInput");
const NotificationUpdateWithoutActorInput_1 = require("../inputs/NotificationUpdateWithoutActorInput");
const NotificationWhereUniqueInput_1 = require("../inputs/NotificationWhereUniqueInput");
let NotificationUpsertWithWhereUniqueWithoutActorInput = class NotificationUpsertWithWhereUniqueWithoutActorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationWhereUniqueInput_1.NotificationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationWhereUniqueInput_1.NotificationWhereUniqueInput)
], NotificationUpsertWithWhereUniqueWithoutActorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationUpdateWithoutActorInput_1.NotificationUpdateWithoutActorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationUpdateWithoutActorInput_1.NotificationUpdateWithoutActorInput)
], NotificationUpsertWithWhereUniqueWithoutActorInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationCreateWithoutActorInput_1.NotificationCreateWithoutActorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationCreateWithoutActorInput_1.NotificationCreateWithoutActorInput)
], NotificationUpsertWithWhereUniqueWithoutActorInput.prototype, "create", void 0);
NotificationUpsertWithWhereUniqueWithoutActorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationUpsertWithWhereUniqueWithoutActorInput", {
        isAbstract: true
    })
], NotificationUpsertWithWhereUniqueWithoutActorInput);
exports.NotificationUpsertWithWhereUniqueWithoutActorInput = NotificationUpsertWithWhereUniqueWithoutActorInput;
