"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationUpdateWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationUpdateWithoutUserInput_1 = require("../inputs/NotificationUpdateWithoutUserInput");
const NotificationWhereUniqueInput_1 = require("../inputs/NotificationWhereUniqueInput");
let NotificationUpdateWithWhereUniqueWithoutUserInput = class NotificationUpdateWithWhereUniqueWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationWhereUniqueInput_1.NotificationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationWhereUniqueInput_1.NotificationWhereUniqueInput)
], NotificationUpdateWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationUpdateWithoutUserInput_1.NotificationUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationUpdateWithoutUserInput_1.NotificationUpdateWithoutUserInput)
], NotificationUpdateWithWhereUniqueWithoutUserInput.prototype, "data", void 0);
NotificationUpdateWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationUpdateWithWhereUniqueWithoutUserInput", {
        isAbstract: true
    })
], NotificationUpdateWithWhereUniqueWithoutUserInput);
exports.NotificationUpdateWithWhereUniqueWithoutUserInput = NotificationUpdateWithWhereUniqueWithoutUserInput;
