"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedManyWithoutWardInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateManyWardInputEnvelope_1 = require("../inputs/UserCreateManyWardInputEnvelope");
const UserCreateOrConnectWithoutWardInput_1 = require("../inputs/UserCreateOrConnectWithoutWardInput");
const UserCreateWithoutWardInput_1 = require("../inputs/UserCreateWithoutWardInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedManyWithoutWardInput = class UserCreateNestedManyWithoutWardInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserCreateWithoutWardInput_1.UserCreateWithoutWardInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserCreateNestedManyWithoutWardInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutWardInput_1.UserCreateOrConnectWithoutWardInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserCreateNestedManyWithoutWardInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateManyWardInputEnvelope_1.UserCreateManyWardInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateManyWardInputEnvelope_1.UserCreateManyWardInputEnvelope)
], UserCreateNestedManyWithoutWardInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserCreateNestedManyWithoutWardInput.prototype, "connect", void 0);
UserCreateNestedManyWithoutWardInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedManyWithoutWardInput", {
        isAbstract: true
    })
], UserCreateNestedManyWithoutWardInput);
exports.UserCreateNestedManyWithoutWardInput = UserCreateNestedManyWithoutWardInput;
