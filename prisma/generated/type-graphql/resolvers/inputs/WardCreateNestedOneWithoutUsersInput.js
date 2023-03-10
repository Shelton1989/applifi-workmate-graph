"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WardCreateNestedOneWithoutUsersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WardCreateOrConnectWithoutUsersInput_1 = require("../inputs/WardCreateOrConnectWithoutUsersInput");
const WardCreateWithoutUsersInput_1 = require("../inputs/WardCreateWithoutUsersInput");
const WardWhereUniqueInput_1 = require("../inputs/WardWhereUniqueInput");
let WardCreateNestedOneWithoutUsersInput = class WardCreateNestedOneWithoutUsersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WardCreateWithoutUsersInput_1.WardCreateWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WardCreateWithoutUsersInput_1.WardCreateWithoutUsersInput)
], WardCreateNestedOneWithoutUsersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WardCreateOrConnectWithoutUsersInput_1.WardCreateOrConnectWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WardCreateOrConnectWithoutUsersInput_1.WardCreateOrConnectWithoutUsersInput)
], WardCreateNestedOneWithoutUsersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WardWhereUniqueInput_1.WardWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WardWhereUniqueInput_1.WardWhereUniqueInput)
], WardCreateNestedOneWithoutUsersInput.prototype, "connect", void 0);
WardCreateNestedOneWithoutUsersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WardCreateNestedOneWithoutUsersInput", {
        isAbstract: true
    })
], WardCreateNestedOneWithoutUsersInput);
exports.WardCreateNestedOneWithoutUsersInput = WardCreateNestedOneWithoutUsersInput;
