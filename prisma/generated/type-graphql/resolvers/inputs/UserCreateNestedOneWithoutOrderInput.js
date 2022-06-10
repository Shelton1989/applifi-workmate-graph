"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutOrderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutOrderInput_1 = require("../inputs/UserCreateOrConnectWithoutOrderInput");
const UserCreateWithoutOrderInput_1 = require("../inputs/UserCreateWithoutOrderInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutOrderInput = class UserCreateNestedOneWithoutOrderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutOrderInput_1.UserCreateWithoutOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutOrderInput_1.UserCreateWithoutOrderInput)
], UserCreateNestedOneWithoutOrderInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutOrderInput_1.UserCreateOrConnectWithoutOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutOrderInput_1.UserCreateOrConnectWithoutOrderInput)
], UserCreateNestedOneWithoutOrderInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutOrderInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutOrderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutOrderInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutOrderInput);
exports.UserCreateNestedOneWithoutOrderInput = UserCreateNestedOneWithoutOrderInput;
