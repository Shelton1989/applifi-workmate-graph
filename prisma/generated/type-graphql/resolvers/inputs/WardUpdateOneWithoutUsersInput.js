"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WardUpdateOneWithoutUsersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WardCreateOrConnectWithoutUsersInput_1 = require("../inputs/WardCreateOrConnectWithoutUsersInput");
const WardCreateWithoutUsersInput_1 = require("../inputs/WardCreateWithoutUsersInput");
const WardUpdateWithoutUsersInput_1 = require("../inputs/WardUpdateWithoutUsersInput");
const WardUpsertWithoutUsersInput_1 = require("../inputs/WardUpsertWithoutUsersInput");
const WardWhereUniqueInput_1 = require("../inputs/WardWhereUniqueInput");
let WardUpdateOneWithoutUsersInput = class WardUpdateOneWithoutUsersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WardCreateWithoutUsersInput_1.WardCreateWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WardCreateWithoutUsersInput_1.WardCreateWithoutUsersInput)
], WardUpdateOneWithoutUsersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WardCreateOrConnectWithoutUsersInput_1.WardCreateOrConnectWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WardCreateOrConnectWithoutUsersInput_1.WardCreateOrConnectWithoutUsersInput)
], WardUpdateOneWithoutUsersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WardUpsertWithoutUsersInput_1.WardUpsertWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WardUpsertWithoutUsersInput_1.WardUpsertWithoutUsersInput)
], WardUpdateOneWithoutUsersInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], WardUpdateOneWithoutUsersInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], WardUpdateOneWithoutUsersInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WardWhereUniqueInput_1.WardWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WardWhereUniqueInput_1.WardWhereUniqueInput)
], WardUpdateOneWithoutUsersInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WardUpdateWithoutUsersInput_1.WardUpdateWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WardUpdateWithoutUsersInput_1.WardUpdateWithoutUsersInput)
], WardUpdateOneWithoutUsersInput.prototype, "update", void 0);
WardUpdateOneWithoutUsersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WardUpdateOneWithoutUsersInput", {
        isAbstract: true
    })
], WardUpdateOneWithoutUsersInput);
exports.WardUpdateOneWithoutUsersInput = WardUpdateOneWithoutUsersInput;
