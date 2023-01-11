"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantUpdateOneWithoutUsersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TenantCreateOrConnectWithoutUsersInput_1 = require("../inputs/TenantCreateOrConnectWithoutUsersInput");
const TenantCreateWithoutUsersInput_1 = require("../inputs/TenantCreateWithoutUsersInput");
const TenantUpdateWithoutUsersInput_1 = require("../inputs/TenantUpdateWithoutUsersInput");
const TenantUpsertWithoutUsersInput_1 = require("../inputs/TenantUpsertWithoutUsersInput");
const TenantWhereUniqueInput_1 = require("../inputs/TenantWhereUniqueInput");
let TenantUpdateOneWithoutUsersInput = class TenantUpdateOneWithoutUsersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateWithoutUsersInput_1.TenantCreateWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCreateWithoutUsersInput_1.TenantCreateWithoutUsersInput)
], TenantUpdateOneWithoutUsersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateOrConnectWithoutUsersInput_1.TenantCreateOrConnectWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCreateOrConnectWithoutUsersInput_1.TenantCreateOrConnectWithoutUsersInput)
], TenantUpdateOneWithoutUsersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpsertWithoutUsersInput_1.TenantUpsertWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantUpsertWithoutUsersInput_1.TenantUpsertWithoutUsersInput)
], TenantUpdateOneWithoutUsersInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], TenantUpdateOneWithoutUsersInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], TenantUpdateOneWithoutUsersInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantWhereUniqueInput_1.TenantWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantWhereUniqueInput_1.TenantWhereUniqueInput)
], TenantUpdateOneWithoutUsersInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpdateWithoutUsersInput_1.TenantUpdateWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantUpdateWithoutUsersInput_1.TenantUpdateWithoutUsersInput)
], TenantUpdateOneWithoutUsersInput.prototype, "update", void 0);
TenantUpdateOneWithoutUsersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantUpdateOneWithoutUsersInput", {
        isAbstract: true
    })
], TenantUpdateOneWithoutUsersInput);
exports.TenantUpdateOneWithoutUsersInput = TenantUpdateOneWithoutUsersInput;
