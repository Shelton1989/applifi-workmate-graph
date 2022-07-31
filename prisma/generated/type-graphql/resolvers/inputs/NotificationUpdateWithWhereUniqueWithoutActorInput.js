"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationUpdateWithWhereUniqueWithoutActorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationUpdateWithoutActorInput_1 = require("../inputs/NotificationUpdateWithoutActorInput");
const NotificationWhereUniqueInput_1 = require("../inputs/NotificationWhereUniqueInput");
let NotificationUpdateWithWhereUniqueWithoutActorInput = class NotificationUpdateWithWhereUniqueWithoutActorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationWhereUniqueInput_1.NotificationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationWhereUniqueInput_1.NotificationWhereUniqueInput)
], NotificationUpdateWithWhereUniqueWithoutActorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationUpdateWithoutActorInput_1.NotificationUpdateWithoutActorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationUpdateWithoutActorInput_1.NotificationUpdateWithoutActorInput)
], NotificationUpdateWithWhereUniqueWithoutActorInput.prototype, "data", void 0);
NotificationUpdateWithWhereUniqueWithoutActorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationUpdateWithWhereUniqueWithoutActorInput", {
        isAbstract: true
    })
], NotificationUpdateWithWhereUniqueWithoutActorInput);
exports.NotificationUpdateWithWhereUniqueWithoutActorInput = NotificationUpdateWithWhereUniqueWithoutActorInput;
