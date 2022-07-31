"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let NotificationWhereUniqueInput = class NotificationWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationWhereUniqueInput.prototype, "id", void 0);
NotificationWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationWhereUniqueInput", {
        isAbstract: true
    })
], NotificationWhereUniqueInput);
exports.NotificationWhereUniqueInput = NotificationWhereUniqueInput;
