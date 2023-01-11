"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantCreateNestedOneWithoutExperiencesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TenantCreateOrConnectWithoutExperiencesInput_1 = require("../inputs/TenantCreateOrConnectWithoutExperiencesInput");
const TenantCreateWithoutExperiencesInput_1 = require("../inputs/TenantCreateWithoutExperiencesInput");
const TenantWhereUniqueInput_1 = require("../inputs/TenantWhereUniqueInput");
let TenantCreateNestedOneWithoutExperiencesInput = class TenantCreateNestedOneWithoutExperiencesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateWithoutExperiencesInput_1.TenantCreateWithoutExperiencesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCreateWithoutExperiencesInput_1.TenantCreateWithoutExperiencesInput)
], TenantCreateNestedOneWithoutExperiencesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateOrConnectWithoutExperiencesInput_1.TenantCreateOrConnectWithoutExperiencesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCreateOrConnectWithoutExperiencesInput_1.TenantCreateOrConnectWithoutExperiencesInput)
], TenantCreateNestedOneWithoutExperiencesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantWhereUniqueInput_1.TenantWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantWhereUniqueInput_1.TenantWhereUniqueInput)
], TenantCreateNestedOneWithoutExperiencesInput.prototype, "connect", void 0);
TenantCreateNestedOneWithoutExperiencesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantCreateNestedOneWithoutExperiencesInput", {
        isAbstract: true
    })
], TenantCreateNestedOneWithoutExperiencesInput);
exports.TenantCreateNestedOneWithoutExperiencesInput = TenantCreateNestedOneWithoutExperiencesInput;
