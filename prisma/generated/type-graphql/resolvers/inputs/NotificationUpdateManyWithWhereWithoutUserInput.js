"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationUpdateManyWithWhereWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationScalarWhereInput_1 = require("../inputs/NotificationScalarWhereInput");
const NotificationUpdateManyMutationInput_1 = require("../inputs/NotificationUpdateManyMutationInput");
let NotificationUpdateManyWithWhereWithoutUserInput = class NotificationUpdateManyWithWhereWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationScalarWhereInput_1.NotificationScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationScalarWhereInput_1.NotificationScalarWhereInput)
], NotificationUpdateManyWithWhereWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationUpdateManyMutationInput_1.NotificationUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationUpdateManyMutationInput_1.NotificationUpdateManyMutationInput)
], NotificationUpdateManyWithWhereWithoutUserInput.prototype, "data", void 0);
NotificationUpdateManyWithWhereWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationUpdateManyWithWhereWithoutUserInput", {
        isAbstract: true
    })
], NotificationUpdateManyWithWhereWithoutUserInput);
exports.NotificationUpdateManyWithWhereWithoutUserInput = NotificationUpdateManyWithWhereWithoutUserInput;
